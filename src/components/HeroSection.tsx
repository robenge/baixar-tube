
import { download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">BaixaTube</span> Download Hub
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Interface moderna com temas personalizáveis, download rápido de vídeos e músicas com tecnologia yt-dlp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#download" className="btn-download">
                <download className="w-5 h-5" />
                Baixar Agora
              </a>
              <a 
                href="#features" 
                className="py-3 px-8 rounded-lg border border-gray-300 text-gray-700 
                  hover:border-primary hover:text-primary transition-colors duration-300 
                  flex items-center justify-center"
              >
                Ver Recursos
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Desenvolvido por RSsoftware - "O melhor da internet por menos."
            </p>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-2 rounded-xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-3 shadow-inner">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400">BaixaTube.exe</div>
                </div>
                <div className="bg-gradient-purple rounded-md p-6 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">BaixaTube</h3>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                        <palette className="w-4 h-4" />
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                        <history className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-md mb-4">
                    <p className="text-sm">Cole o URL do vídeo ou música:</p>
                    <div className="bg-white/5 p-2 rounded mt-1 text-xs text-gray-300">
                      https://youtube.com/watch?v=example
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-sm mb-1">Formato:</p>
                      <div className="flex gap-2">
                        <div className="bg-white/30 px-3 py-1 rounded text-xs">Vídeo</div>
                        <div className="bg-white/10 px-3 py-1 rounded text-xs">Música</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm mb-1">Qualidade:</p>
                      <div className="bg-white/10 px-3 py-1 rounded text-xs">Alta (720p)</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white text-brand-purple font-medium px-4 py-2 rounded-md w-full text-center">
                      Download
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for background */}
      <div className="hidden md:block absolute top-32 right-[5%] w-16 h-16 rounded-full bg-brand-purple/10"></div>
      <div className="hidden md:block absolute bottom-16 left-[15%] w-24 h-24 rounded-full bg-brand-blue/10"></div>
      <div className="hidden md:block absolute top-48 left-[10%] w-6 h-6 rounded-full bg-brand-purple/20"></div>
    </section>
  );
};

export default HeroSection;
