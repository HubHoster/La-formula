import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Database, Lock, UserCheck, Share2, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
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
          {/* Back to Home Button */}
          <Link 
            to={basePath || '/'} 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('common.back_to_home')}
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text text-center mb-6">
            {t('privacy.page_title')}
          </h1>
          <p className="text-center text-muted-foreground">
            {t('privacy.last_updated')}
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.intro_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.intro_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.collection_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('privacy.collection_text')}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t('privacy.identity_data')}</li>
                    <li>• {t('privacy.contact_data')}</li>
                    <li>• {t('privacy.business_data')}</li>
                    <li>• {t('privacy.financial_data')}</li>
                    <li>• {t('privacy.technical_data')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.usage_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('privacy.usage_text')}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t('privacy.usage_provide')}</li>
                    <li>• {t('privacy.usage_consulting')}</li>
                    <li>• {t('privacy.usage_documentation')}</li>
                    <li>• {t('privacy.usage_compliance')}</li>
                    <li>• {t('privacy.usage_communicate')}</li>
                    <li>• {t('privacy.usage_improve')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.sharing_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.sharing_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.security_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('privacy.security_text')}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t('privacy.security_encryption')}</li>
                    <li>• {t('privacy.security_access')}</li>
                    <li>• {t('privacy.security_training')}</li>
                    <li>• {t('privacy.security_testing')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.rights_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('privacy.rights_text')}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t('privacy.rights_access')}</li>
                    <li>• {t('privacy.rights_correct')}</li>
                    <li>• {t('privacy.rights_delete')}</li>
                    <li>• {t('privacy.rights_restrict')}</li>
                    <li>• {t('privacy.rights_portability')}</li>
                    <li>• {t('privacy.rights_withdraw')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('privacy.contact_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {t('privacy.contact_text')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.contact_email')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacy.contact_location')}
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
