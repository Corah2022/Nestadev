"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Sun1, Moon, HambergerMenu, ArrowRight } from "iconsax-react";
import { Button } from "../ui/aevr/button";


interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export const Navbar = () => {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([
    { label: 'Home', href: '/', isActive: false },
    { label: "About Us", href: "/about-us", isActive: false },
    { label: "Solutions", href: "/solutions", isActive: false },
    { label: "Blog", href: "/blog", isActive: false },
    { label: "Contact", href: "/contact", isActive: false },
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setNavigationItems((items) =>
      items.map((item) => ({
        ...item,
        isActive: window.location.pathname === item.href,
      })),
    );
  }, []);




  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 md:px-6">
        <div
          className={`w-full transition-all duration-300 rounded-3xl ${isScrolled
            ? 'mt-4 max-w-5xl backdrop-blur-lg bg-white border border-gray-300/50 shadow-lg px-2 md:px-4 py-2'
            : 'mt-4 md:mt-6 max-w-6xl bg-white border border-gray-300/50 px-2 md:px-6 py-3 md:py-4'
            }`}
        >
          <div className="flex items-center justify-end lg:justify-between">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item, index) => (

                <a
                  href={item.href}
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm tracking-[-0.8px] font-medium ${isScrolled && item.isActive
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' :
                    item.isActive
                      ? 'bg-white shadow-sm dark:bg-gray-800 border-slate-300 dark:border-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700/50'
                    }  transition-all`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA and Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">

              <Link
                href={'https://elsa.nestadev.com/'}
              >
                <Button variant="primary" className="rounded-2xl px-4 text-sm font-medium bg-[#6b21a8] hover:bg-[#6b21a8]/80 tracking-[-0.8px]">
                  Try Elsa
                  <ArrowRight size={20} variant="TwoTone" color="white" />
                </Button>
              </Link>

            </div>

            {/* Mobile/Tablet Right Section */}
            <div className="flex lg:hidden items-center gap-2">


              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <Link
                  href={'https://elsa.nestadev.com/'}
                >
                  <button className="px-4 py-2 bg-[#6b21a8] hover:bg-[#6b21a8]/80 text-white flex items-center gap-2 font-medium text-sm tracking-[-0.8px]">
                    Try Elsa
                    <ArrowRight size={20} variant="TwoTone" color="white" />
                  </button>
                </Link>
              </div>


              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-2 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center"
              >
                <HambergerMenu variant="Linear" color="currentColor" className="text-black dark:text-white" size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute inset-4 top-4 bottom-auto max-h-[90vh] bg-slate-100 border border-gray-800 dark:border-gray-700 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="p-6">
              {/* Menu Header */}
              <div className="flex items-center justify-end mb-8">

                <div className="flex items-center gap-2">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center"
                  >
                    <svg
                      className="w-6 h-6 text-gray-900 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-6 py-4 text-black text-lg tracking-[-0.8px] font-medium hover:bg-white/10 dark:hover:bg-gray-700/50 rounded-2xl transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};
