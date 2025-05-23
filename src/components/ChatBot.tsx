
import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Olá! Sou o assistente virtual da CriptoLock BR. Como posso ajudar você hoje?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const chatButton = document.getElementById('open-chat');
    if (chatButton) {
      chatButton.addEventListener('click', () => setIsOpen(true));
    }
    
    return () => {
      if (chatButton) {
        chatButton.removeEventListener('click', () => setIsOpen(true));
      }
    };
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: Message = {
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Usando nosso servidor intermediário em vez da API diretamente
      const response = await fetch('http://api-criptolock.vercel.app/api/chatbot', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: inputMessage
        })
      });
      
      if (!response.ok) {
        throw new Error('Erro na comunicação com o chatbot');
      }
      
      const data = await response.json();
      
      // Extrai a resposta do formato retornado pela API
      const botResponse = data.outputs?.output_0 || "Desculpe, não consegui processar sua solicitação.";
      
      const botMessage: Message = {
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Erro ao comunicar com o chatbot:', error);
      toast.error('Erro ao comunicar com o chatbot. Por favor, tente novamente.');
      
      const errorMessage: Message = {
        sender: 'bot',
        text: 'Desculpe, estou enfrentando problemas técnicos. Por favor, tente novamente mais tarde ou entre em contato por telefone ou email.',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-cripto-gold flex items-center justify-center shadow-lg cursor-pointer hover:opacity-90 transition-opacity z-50"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cripto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-cripto-darkblue rounded-lg shadow-xl flex flex-col z-50">
      <div className="flex items-center justify-between bg-cripto-gold text-cripto-dark px-4 py-3 rounded-t-lg">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h3 className="font-semibold">CriptoLock Assistente</h3>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-cripto-dark hover:bg-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={18} />
        </Button>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-cripto-gold text-cripto-dark' 
                  : 'bg-gray-700 text-white'
              }`}
            >
              <div className="text-sm">{message.text}</div>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-gray-700 p-3">
        <div className="flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-grow bg-gray-700 text-white rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cripto-gold"
            placeholder={isLoading ? "Aguarde..." : "Digite sua mensagem..."}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className={`bg-cripto-gold text-cripto-dark px-3 py-2 rounded-r-lg ${
              isLoading || !inputMessage.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
