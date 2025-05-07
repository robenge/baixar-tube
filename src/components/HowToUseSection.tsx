
import { useState } from 'react';

const HowToUseSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      number: 1,
      title: "Execute BaixaTube.exe",
      description: "Abra o programa após finalizar o download e instalação."
    },
    {
      number: 2,
      title: "Insira uma URL válida",
      description: "Cole o endereço do vídeo ou música que deseja baixar."
    },
    {
      number: 3,
      title: "Escolha o formato",
      description: "Selecione entre vídeo ou música conforme sua preferência."
    },
    {
      number: 4,
      title: "Clique em Download",
      description: "Inicie o download e aguarde a conclusão do processo."
    },
    {
      number: 5,
      title: "Altere o tema (opcional)",
      description: "Personalize a aparência pelo menu Ferramentas > Tema."
    },
    {
      number: 6,
      title: "Consulte o histórico",
      description: "Acesse seus downloads anteriores pelo botão Histórico."
    }
  ];

  return (
    <section id="how-to" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Usar</h2>
          <p className="text-gray-600">
            Siga este passo a passo simples para começar a usar o BaixaTube
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Steps Navigation */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-xl">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all mb-2 ${
                    currentStep === step.number 
                      ? 'bg-primary/10 border-l-4 border-primary' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentStep(step.number)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    currentStep === step.number 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className={`font-medium ${
                      currentStep === step.number ? 'text-primary' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    {currentStep === step.number && (
                      <p className="text-gray-600 text-sm mt-1 animate-fade-in">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step Illustration */}
          <div className="w-full lg:w-2/3 h-80 md:h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md relative">
            {currentStep === 1 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-purple rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="m5 8 6 6 6-6"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Execute BaixaTube.exe</h4>
                  <p className="text-gray-600">
                    Localize o arquivo BaixaTube.exe na pasta onde você baixou o programa e dê um duplo clique para iniciar.
                  </p>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <div className="bg-gray-800 p-2 rounded-t-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-xs text-gray-400 ml-2">BaixaTube</div>
                    </div>
                  </div>
                  <div className="p-4 border-x border-b border-gray-300 rounded-b-lg">
                    <h4 className="text-lg font-medium mb-3">Cole o URL do vídeo:</h4>
                    <div className="bg-gray-100 border border-gray-300 p-3 rounded flex items-center">
                      <input
                        type="text"
                        placeholder="https://youtube.com/watch?v=..."
                        className="bg-transparent border-none outline-none w-full text-gray-700"
                        readOnly
                      />
                      <div className="bg-primary text-white px-3 py-1 rounded text-sm ml-2">Colar</div>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Cole o endereço completo do vídeo ou música que deseja baixar</p>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h4 className="text-lg font-medium mb-4">Escolha o formato desejado:</h4>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 border-2 border-primary bg-primary/5 rounded-lg p-4 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary mb-2">
                        <polygon points="23 7 16 12 23 17 23 7"/>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                      </svg>
                      <span className="font-medium text-primary">Vídeo</span>
                    </div>
                    <div className="flex-1 border-2 border-gray-200 rounded-lg p-4 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400 mb-2">
                        <path d="M9 18V5l12-2v13"/>
                        <circle cx="6" cy="18" r="3"/>
                        <circle cx="18" cy="16" r="3"/>
                      </svg>
                      <span className="font-medium text-gray-500">Música</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Selecione o formato que melhor atende às suas necessidades
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h4 className="text-lg font-medium mb-4">Clique em Download:</h4>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="font-medium">video_exemplo.mp4</p>
                        <p className="text-sm text-gray-500">720p • 42.3 MB</p>
                      </div>
                      <button className="bg-gradient-purple text-white px-4 py-2 rounded-md font-medium">
                        Download
                      </button>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-purple w-0"></div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">
                    Após clicar em Download, você poderá acompanhar o progresso do download e cancelá-lo se necessário
                  </p>
                </div>
              </div>
            )}
            
            {currentStep === 5 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h4 className="text-lg font-medium mb-4">Altere o tema (opcional):</h4>
                  <div className="bg-gray-800 p-2 mb-4 rounded">
                    <div className="flex">
                      <div className="text-white text-sm px-3 py-1 border-b-2 border-primary">Ferramentas</div>
                      <div className="text-gray-400 text-sm px-3 py-1">Ajuda</div>
                    </div>
                    <div className="bg-gray-700 p-2 rounded mt-2">
                      <div className="text-white py-1 px-2 hover:bg-gray-600 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <span>Tema</span>
                      </div>
                      <div className="ml-6 bg-gradient-purple text-white py-1 px-2 rounded mt-1">
                        Tema Roxo
                      </div>
                      <div className="ml-6 text-white py-1 px-2 hover:bg-gray-600 rounded">
                        Tema Azul
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Personalize a aparência do programa escolhendo o tema que mais combina com você
                  </p>
                </div>
              </div>
            )}
            
            {currentStep === 6 && (
              <div className="absolute inset-0 p-6 flex items-center justify-center animate-fade-in">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h4 className="text-lg font-medium mb-4">Consulte o histórico:</h4>
                  <div className="border border-gray-200 rounded-lg">
                    <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                      <h5 className="font-medium">Histórico de Downloads</h5>
                      <button className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300">
                        Limpar
                      </button>
                    </div>
                    <div className="p-3">
                      <div className="border-b pb-2 mb-2">
                        <p className="font-medium">video_exemplo_1.mp4</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>720p • 42.3 MB</span>
                          <span>Hoje, 14:32</span>
                        </div>
                      </div>
                      <div className="border-b pb-2 mb-2">
                        <p className="font-medium">musica_exemplo.mp3</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>320 kbps • 8.7 MB</span>
                          <span>Hoje, 10:15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">
                    Acesse facilmente seus downloads anteriores para encontrar o que precisa
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
