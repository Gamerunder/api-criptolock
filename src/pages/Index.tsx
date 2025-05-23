
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    // Load any necessary scripts or perform initial setup
    const welcomeTimeout = setTimeout(() => {
      toast.info('Bem-vindo à CriptoLock BR! Especialistas em segurança de criptomoedas desde 2018.');
    }, 2000);
    
    return () => clearTimeout(welcomeTimeout);
  }, []);
  
  return (
    <div className="min-h-screen bg-cripto-dark text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
