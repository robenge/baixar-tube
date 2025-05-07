
import { useState } from 'react';
import { palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeShowcase = () => {
  const [activeTheme, setActiveTheme] = useState<'purple' | 'blue'>('purple');

  return (
    <div className="my-12 relative">
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-purple/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-brand-blue/5 rounded-full blur-xl"></div>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Troca de Temas</h3>
            <palette className="text-brand-purple w-5 h-5" />
          </div>
          <p className="text-gray-700 mb-4">
            Personalize sua experiência escolhendo entre os temas disponíveis com efeitos visuais:
          </p>
          
          <div className="flex gap-4 mb-6">
            <Button 
              onClick={() => setActiveTheme('purple')}
              className={`flex-1 ${activeTheme === 'purple' ? 'bg-gradient-purple' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Tema Roxo
            </Button>
            <Button 
              onClick={() => setActiveTheme('blue')}
              className={`flex-1 ${activeTheme === 'blue' ? 'bg-gradient-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Tema Azul
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative z-10">
          <div className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
            activeTheme === 'purple' ? 'bg-gradient-purple' : 'bg-gradient-blue'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">BaixaTube</h3>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <palette className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-md text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm">video_example.mp4</div>
                <div className="text-xs bg-white/20 px-2 py-1 rounded">100%</div>
              </div>
              <div className="w-full bg-white/10 h-2 rounded overflow-hidden">
                <div className="h-full bg-white w-full"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Escolha entre temas roxo e azul</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;
