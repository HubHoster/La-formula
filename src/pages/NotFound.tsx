import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('notfound.title')}</h1>
        <p className="mb-4 text-xl text-gray-600">{t('notfound.message')}</p>
        <a 
          href="/" 
          className="inline-block mb-6 px-6 py-3 font-semibold text-white bg-blue-950 rounded-md hover:bg-slate-500 transition-colors duration-300"
        >
          {t('notfound.return_home')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
