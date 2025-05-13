
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'es' | 'ru';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const defaultTranslations = {
  en: {
    features: "Features",
    personal: "Personal",
    business: "Business",
    tryIt: "Try it",
    signIn: "Sign In",
    getStarted: "Get Started",
    heroTitle: "Your AI Travel Planner for Perfect Trips",
    heroDescription: "Describe your dream trip in a sentence and get a complete travel plan with flights, hotels, activities and more—all tailored to your preferences.",
    tryPersonal: "Try for Personal Travel",
    businessSolutions: "Business Solutions",
  },
  de: {
    features: "Funktionen",
    personal: "Privat",
    business: "Geschäftlich",
    tryIt: "Ausprobieren",
    signIn: "Anmelden",
    getStarted: "Loslegen",
    heroTitle: "Dein KI-Reiseplaner für perfekte Reisen",
    heroDescription: "Beschreibe deine Traumreise in einem Satz und erhalte einen vollständigen Reiseplan mit Flügen, Hotels, Aktivitäten und mehr - alles auf deine Vorlieben zugeschnitten.",
    tryPersonal: "Für private Reisen",
    businessSolutions: "Geschäftslösungen",
  },
  es: {
    features: "Características",
    personal: "Personal",
    business: "Negocios",
    tryIt: "Pruébalo",
    signIn: "Iniciar sesión",
    getStarted: "Comenzar",
    heroTitle: "Tu planificador de viajes con IA para viajes perfectos",
    heroDescription: "Describe tu viaje de ensueño en una frase y obtén un plan completo con vuelos, hoteles, actividades y más, todo adaptado a tus preferencias.",
    tryPersonal: "Prueba para viajes personales",
    businessSolutions: "Soluciones empresariales",
  },
  ru: {
    features: "Функции",
    personal: "Личные",
    business: "Бизнес",
    tryIt: "Попробовать",
    signIn: "Войти",
    getStarted: "Начать",
    heroTitle: "Ваш ИИ-планировщик путешествий для идеальных поездок",
    heroDescription: "Опишите свою поездку мечты в одном предложении и получите полный план путешествия с рейсами, отелями, мероприятиями и многим другим - всё с учётом ваших предпочтений.",
    tryPersonal: "Для личных путешествий",
    businessSolutions: "Бизнес-решения",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return defaultTranslations[language][key] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    translations: defaultTranslations,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
