
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-cripto-gold transition-colors">Início</a>
          <a href="#servicos" className="text-white hover:text-cripto-gold transition-colors">Serviços</a>
          <a href="#sobre" className="text-white hover:text-cripto-gold transition-colors">Sobre</a>
          <a href="#contato" className="text-white hover:text-cripto-gold transition-colors">Contato</a>
          <Button className="btn-primary">Agendar Consulta</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cripto-darkblue p-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-cripto-gold transition-colors py-2">Início</a>
              <a href="#servicos" className="text-white hover:text-cripto-gold transition-colors py-2">Serviços</a>
              <a href="#sobre" className="text-white hover:text-cripto-gold transition-colors py-2">Sobre</a>
              <a href="#contato" className="text-white hover:text-cripto-gold transition-colors py-2">Contato</a>
              <Button className="btn-primary w-full mt-2">Agendar Consulta</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
