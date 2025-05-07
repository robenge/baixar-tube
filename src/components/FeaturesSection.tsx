
import { download, palette, history, clock, book } from 'lucide-react';
import ThemeShowcase from './ThemeShowcase';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="feature-card bg-white rounded-xl shadow-md p-6 hover:shadow-xl">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Principais</h2>
          <p className="text-gray-600">
            O BaixaTube oferece uma experiência completa para download de conteúdo com uma interface moderna e personalizável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FeatureCard 
            icon={download}
            title="Download Fácil"
            description="Baixe vídeos e músicas do YouTube com apenas alguns cliques através da tecnologia yt-dlp."
          />
          <FeatureCard 
            icon={palette}
            title="Temas Personalizáveis"
            description="Escolha entre diversos temas com efeitos visuais para personalizar sua experiência."
          />
          <FeatureCard 
            icon={history}
            title="Histórico de Downloads"
            description="Acesse facilmente seu histórico completo de downloads salvos localmente."
          />
          <FeatureCard 
            icon={clock}
            title="Cancelamento Rápido"
            description="Cancele downloads em andamento com um único clique quando necessário."
          />
          <FeatureCard 
            icon={book}
            title="Ajuda Integrada"
            description="Acesse instruções detalhadas através da janela de Ajuda e Sobre integrada."
          />
        </div>
        
        <ThemeShowcase />
      </div>
    </section>
  );
};

export default FeaturesSection;
