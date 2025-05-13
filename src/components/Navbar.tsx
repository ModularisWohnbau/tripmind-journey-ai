
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'ru', name: 'Русский' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-bold text-xl text-brand-purple-darkest">
              Tripmind Assist
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-brand-purple">
            {t('features')}
          </a>
          <a href="#personal" className="text-gray-700 hover:text-brand-purple">
            {t('personal')}
          </a>
          <a href="#business" className="text-gray-700 hover:text-brand-purple">
            {t('business')}
          </a>
          <a href="#planner" className="text-gray-700 hover:text-brand-purple">
            {t('tryIt')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-gray-100" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="hidden md:inline-flex">
            {t('signIn')}
          </Button>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark">
            {t('getStarted')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
