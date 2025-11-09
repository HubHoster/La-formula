import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, Info, CheckCircle, BarChart, Settings, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Cookies = () => {
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
            {t('cookies.page_title')}
          </h1>
          <p className="text-center text-muted-foreground">
            {t('cookies.last_updated')}
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
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.intro_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.intro_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* What Are Cookies */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.what_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.what_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.how_we_use_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('cookies.how_we_use_content')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-2">
                      {t('cookies.essential_title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('cookies.essential_text')}
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-2">
                      {t('cookies.analytics_title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('cookies.analytics_text')}
                    </p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-2">
                      {t('cookies.functional_title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('cookies.functional_text')}
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-2">
                      {t('cookies.marketing_title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('cookies.marketing_text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.manage_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.manage_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.third_party_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.third_party_content')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card p-8 rounded-2xl border border-border/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">
                    {t('cookies.contact_title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {t('cookies.contact_text')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.contact_email')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('cookies.contact_location')}
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
