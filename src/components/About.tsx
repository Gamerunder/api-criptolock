
import React from 'react';

const features = [
  {
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos robustos que garantem a máxima proteção dos seus ativos digitais."
  },
  {
    title: "Soluções Personalizadas",
    description: "Estratégias adaptadas às necessidades específicas de cada cliente e experiência."
  },
  {
    title: "Monitoramento Contínuo",
    description: "Acompanhamento das mudanças no mercado e atualização de estratégias em tempo real."
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-cripto-darkblue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            <div className="text-sm text-cripto-gold mb-4 font-medium">• Desde 2018 no mercado</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="text-cripto-gold">Cripto Lock BR</span>?
            </h2>
            <p className="text-gray-300 mb-8">
              Somos especialistas dedicados à segurança de ativos digitais, com mais de 
              9 anos de experiência no mercado de criptomoedas. Nossa abordagem valoriza 
              soluções personalizadas focadas em criptografia e proteção digital.
            </p>

            {features.map((feature, index) => (
              <div key={index} className="mb-4 flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full bg-cripto-gold text-cripto-dark flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 border-t border-gray-700 pt-6">
              <h4 className="font-bold mb-3">Parcerias e Certificações</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-cripto-dark rounded-full px-3 py-1 text-sm">
                  <span className="w-2 h-2 bg-cripto-gold rounded-full mr-2"></span>
                  Certificação A
                </div>
                <div className="flex items-center bg-cripto-dark rounded-full px-3 py-1 text-sm">
                  <span className="w-2 h-2 bg-cripto-gold rounded-full mr-2"></span>
                  Certificação B
                </div>
                <div className="flex items-center bg-cripto-dark rounded-full px-3 py-1 text-sm">
                  <span className="w-2 h-2 bg-cripto-gold rounded-full mr-2"></span>
                  Padrão C
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Bitcoin e Smartphone" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cripto-dark p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cripto-gold">9+</div>
                  <div className="text-sm">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
