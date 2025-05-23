
import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="text-cripto-gold">Contato</span></h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Estamos aqui para ajudar você a proteger seus ativos digitais. Entre em contato para 
            uma consultoria personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-cripto-darkblue flex items-center justify-center mr-4">
                    <Phone size={20} className="text-cripto-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Telefone</div>
                    <div className="font-medium">(37) 99132-9873</div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-cripto-darkblue flex items-center justify-center mr-4">
                    <Mail size={20} className="text-cripto-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="font-medium">atendimento@criptolock.com</div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-cripto-darkblue flex items-center justify-center mr-4">
                    <Clock size={20} className="text-cripto-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Horário</div>
                    <div className="font-medium">Seg. Seg. 9h-18h</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Consultoria Online</h3>
              <p className="text-gray-300 mb-6">
                Agende uma demonstração do nosso sistema de segurança para seus ativos digitais.
              </p>
              <button 
                id="open-chat"
                className="flex items-center justify-center w-full bg-cripto-darkblue hover:bg-opacity-80 text-white py-3 px-4 rounded transition-colors"
              >
                <span className="mr-2">Abrir Chat</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cripto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
