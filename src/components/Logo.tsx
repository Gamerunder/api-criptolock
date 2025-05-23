
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/197be6b2-ac44-451a-b92e-d0e9ce8fec15.png" 
        alt="CriptoLock BR Logo" 
        className="h-8 md:h-10" 
      />
      <span className="text-lg md:text-xl font-bold ml-2 text-cripto-gold">CRIPTOLOCK BR</span>
    </div>
  );
};

export default Logo;
