import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export interface DropdownProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    description?: string;
    error?: string;
    disabled?: boolean
}

export function Dropdown({ label, value, onChange, options, description, error, disabled }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof Node && !event.target.contains(document.getElementById('dropdown-root'))) {
                if (isOpen) setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative">
            <label className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-1">
                {label}
            </label>
            {description && (
                <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1">{description}</p>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={disabled}
                className="w-full p-2 sm:p-3 bg-slate-50 dark:bg-[#141415] border border-[#e5e5e5] dark:border-[#262626] rounded-lg flex items-center justify-between text-left hover:border-dark-button-primary transition-colors disabled:bg-gray-700 disabled:text-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed text-sm"
            >
                <span className="text-gray-900 dark:text-white text-xs sm:text-sm">
                    {selectedOption ? (selectedOption.label) : 'Select...'}
                </span>
                <ChevronDown className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-slate-50 dark:bg-[#141415] border border-[#e5e5e5] dark:border-[#262626] rounded-lg shadow-lg">
                    <div className="max-h-60 overflow-auto py-1">
                        {options.map(option => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-left hover:bg-white dark:hover:bg-[#333] transition-colors text-xs sm:text-sm ${value === option.value ? 'text-dark-button-primary' : 'text-gray-900 dark:text-white'
                                    }`}
                            >
                                <div>
                                    <span className="font-medium">{option.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
}
