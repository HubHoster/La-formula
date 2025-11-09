import { useState } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  const basePath = lang === 'es' ? '/spanish' : '';

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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 border-t border-border/20 pt-4">
            <Link
              to={`${basePath}/services`}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.services")}
            </Link>
            <Link
              to={`${basePath}/about`}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.about")}
            </Link>
            <Link
              to={`${basePath}/contact`}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
            <Link
              to={`${basePath}/careers`}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.careers")}
            </Link>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t('header.languages')}:</p>
              <div className="pl-4 space-y-1">
                <button 
                  onClick={() => {
                    setLanguage('en');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center"
                >
                  {lang === 'en' && <Check className="mr-2 h-4 w-4" />}
                  English
                </button>
                <button 
                  onClick={() => {
                    setLanguage('es');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center"
                >
                  {lang === 'es' && <Check className="mr-2 h-4 w-4" />}
                  Español
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
