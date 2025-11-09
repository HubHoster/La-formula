import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, Award, Users, Lightbulb, Handshake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const { t, lang } = useLanguage();
  const basePath = lang === 'es' ? '/spanish' : '';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl" />
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
            {t('aboutus.hero_title')}
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            {t('aboutus.hero_description')}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glass-card p-8 rounded-2xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">
                {t('aboutus.mission_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('aboutus.mission_text')}
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 rounded-2xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">
                {t('aboutus.vision_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('aboutus.vision_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">
            {t('aboutus.values_title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Excellence */}
            <div className="glass-card p-6 rounded-xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">
                {t('aboutus.value_excellence')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('aboutus.value_excellence_desc')}
              </p>
            </div>

            {/* Integrity */}
            <div className="glass-card p-6 rounded-xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">
                {t('aboutus.value_integrity')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('aboutus.value_integrity_desc')}
              </p>
            </div>

            {/* Innovation */}
            <div className="glass-card p-6 rounded-xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">
                {t('aboutus.value_innovation')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('aboutus.value_innovation_desc')}
              </p>
            </div>

            {/* Partnership */}
            <div className="glass-card p-6 rounded-xl border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">
                {t('aboutus.value_partnership')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('aboutus.value_partnership_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
