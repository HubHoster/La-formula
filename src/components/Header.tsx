import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { lang, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = lang === 'es' ? '/spanish' : '';

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20 h-24">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={lang === 'es' ? '/spanish' : '/'} className="flex items-center space-x-3">
            <img
              src="https://www.laformulacg.net/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75"
              alt="La Formula Capital Group"
              className="h-20 w-auto cursor-pointer"
              id="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={`${basePath}/services`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.services")}
            </Link>
            <Link
              to={`${basePath}/about`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.about")}
            </Link>
            <Link
              to={`${basePath}/contact`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.contact")}
            </Link>
            <Link
              to={`${basePath}/careers`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.careers")}
            </Link>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                >
                  {lang === 'en' ? 'English' : 'Español'}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className="flex items-center">
                    {lang === 'en' && <Check className="mr-2 h-4 w-4" />}
                    <span>English</span>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  <span className="flex items-center">
                    {lang === 'es' && <Check className="mr-2 h-4 w-4" />}
                    <span>Español</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation - Fullscreen Drawer */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-[60] min-h-dvh"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/70 z-0"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="absolute inset-y-0 right-0 w-[85%] sm:w-[22rem] bg-background border-l border-border/20 shadow-2xl z-10 h-dvh min-h-dvh flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] rounded-l-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-border/20">
                <Link
                  to={lang === 'es' ? '/spanish' : '/'}
                  className="flex items-center space-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="https://www.laformulacg.net/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=128&q=75"
                    alt="La Formula Capital Group"
                    className="h-10 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close"
                  className="text-foreground hover:text-primary hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X />
                </Button>
              </div>

              {/* Links */}
              <nav className="px-2 py-4 flex-1 overflow-y-auto">
                <Link
                  to={`${basePath}/services`}
                  className="block px-3 py-3 text-lg rounded-xl hover:bg-muted hover:text-primary text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.services")}
                </Link>
                <Link
                  to={`${basePath}/about`}
                  className="block px-3 py-3 text-lg rounded-xl hover:bg-muted hover:text-primary text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.about")}
                </Link>
                <Link
                  to={`${basePath}/contact`}
                  className="block px-3 py-3 text-lg rounded-xl hover:bg-muted hover:text-primary text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.contact")}
                </Link>
                <Link
                  to={`${basePath}/careers`}
                  className="block px-3 py-3 text-lg rounded-xl hover:bg-muted hover:text-primary text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.careers")}
                </Link>

                {/* Language Selector */}
                <div className="mt-4 border-t border-border/20 pt-4">
                  <p className="px-3 pb-2 text-sm text-muted-foreground">
                    {t('header.languages')}:
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-3 text-foreground hover:bg-muted hover:text-primary rounded-xl flex items-center text-base focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {lang === 'en' && <Check className="mr-2 h-4 w-4" />}
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('es');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-3 text-foreground hover:bg-muted hover:text-primary rounded-xl flex items-center text-base focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {lang === 'es' && <Check className="mr-2 h-4 w-4" />}
                      Español
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
