import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Scale, Shield, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsOfUse = () => {
  const { t, lang } = useLanguage();
  const basePath = lang === 'es' ? '/spanish' : '';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative">
          <Link 
            to={basePath || '/'} 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('common.back_to_home')}
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text text-center mb-6">
            {t('terms.page_title')}
          </h1>
          <p className="text-center text-muted-foreground">
            {t('terms.last_updated')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('terms.intro_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('terms.intro_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('terms.services_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('terms.services_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('terms.intellectual_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('terms.intellectual_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('terms.liability_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('terms.liability_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('terms.changes_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('terms.changes_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
