import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeStore {
  theme: Theme;
  resolvedTheme: 'light' | 'dark' | null;
  isInitialized: boolean;
  setTheme: (theme: Theme) => void;
  initializeTheme: () => void;
  syncResolvedTheme: () => void;
}

export const useThemeToggler = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      resolvedTheme: null,
      isInitialized: false,

      syncResolvedTheme: () => {
        if (typeof window === 'undefined') return;
        const isDark = document.documentElement.classList.contains('dark');
        set({ resolvedTheme: isDark ? 'dark' : 'light' });
      },

      setTheme: (theme: Theme) => {
        set({ theme });

        const root = document.documentElement;

        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          root.classList.toggle('dark', systemTheme === 'dark');
          set({ resolvedTheme: systemTheme });
        } else {
          root.classList.toggle('dark', theme === 'dark');
          set({ resolvedTheme: theme });
        }
      },

      initializeTheme: () => {
        if (get().isInitialized) return;

        const { theme, syncResolvedTheme } = get();
        const root = document.documentElement;

        // First sync with current DOM state
        syncResolvedTheme();

        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          root.classList.toggle('dark', systemTheme === 'dark');
          set({ resolvedTheme: systemTheme, isInitialized: true });

          // Listen for system theme changes
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          const handleChange = (e: MediaQueryListEvent) => {
            if (get().theme === 'system') {
              const newTheme = e.matches ? 'dark' : 'light';
              root.classList.toggle('dark', e.matches);
              set({ resolvedTheme: newTheme });
            }
          };
          mediaQuery.addEventListener('change', handleChange);
        } else {
          root.classList.toggle('dark', theme === 'dark');
          set({ resolvedTheme: theme, isInitialized: true });
        }

        // Watch for DOM changes (in case next-themes changes it)
        const observer = new MutationObserver(() => {
          syncResolvedTheme();
        });

        observer.observe(root, {
          attributes: true,
          attributeFilter: ['class'],
        });
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
