
import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const serviceOptions = ["Consultoria em Segurança", "Gestão de Carteiras", "Movimentação Segura", "Armazenamento Seguro", "Autenticação Avançada", "Treinamentos"];
const contactOptions = ["Videochamada", "WhatsApp", "Email"];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: serviceOptions[0],
    contato_preferido: contactOptions[0],
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nome,
          email_id: formData.email,
          phone: formData.telefone,
          service: formData.servico,
          contact_preference: formData.contato_preferido,
          message: formData.mensagem
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Sua mensagem foi enviada com sucesso!');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: serviceOptions[0],
        contato_preferido: contactOptions[0],
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-cripto-darkblue p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-white">Solicite uma Consultoria</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Nome Completo*</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
            placeholder="Seu email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Telefone*</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
            placeholder="Seu telefone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Serviço de Interesse*</label>
          <select
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
            className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
          >
            {serviceOptions.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Contato Preferido*</label>
        <select
          name="contato_preferido"
          value={formData.contato_preferido}
          onChange={handleChange}
          required
          className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
        >
          {contactOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Mensagem*</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-cripto-dark border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cripto-gold"
          placeholder="Como podemos ajudar?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-cripto-gold text-cripto-dark font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Enviando Mensagem...' : 'Enviar Mensagem →'}
      </button>
    </form>
  );
};

export default ContactForm;
