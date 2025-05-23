
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="text-sm text-cripto-gold mb-4 font-medium">• Especialistas desde 2018</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sua <span className="text-cripto-gold">Segurança</span> no<br />
              Mundo das<br />
              Criptomoedas
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              Assessoria especializada em segurança, movimentação e armazenamento de criptomoedas, profissionais com mais de 9 anos de experiência no mercado.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-cripto-gold text-cripto-dark flex items-center justify-center mr-3">
                  <span className="text-xs">✓</span>
                </div>
                <span>+ 150 Clientes Assessorados</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-cripto-gold text-cripto-dark flex items-center justify-center mr-3">
                  <span className="text-xs">✓</span>
                </div>
                <span>Consultoria por Videochamada</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary">Agendar Consulta</Button>
              <Button variant="outline" className="btn-outline">Nossos Serviços</Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Criptomoedas" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 p-2 bg-cripto-darkblue rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  className="text-cripto-gold"
                >
                  <path
                    fill="#E7B54A"
                    d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16s16-7.163 16-16S24.837 0 16 0z"
                  />
                  <path
                    fill="#ffffff"
                    d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.375-.086-.744-.17-1.1-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Icons at bottom */}
        <div className="flex justify-center mt-16 space-x-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-cripto-gold flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cripto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-sm">Segurança</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-cripto-gold flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cripto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-sm">Proteção</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-cripto-gold rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cripto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm">Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
