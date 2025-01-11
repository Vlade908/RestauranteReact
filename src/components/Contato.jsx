import React, { useState } from 'react';
import './contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contato" className="restaurant-contact">
    <div className="contact-info">
      <h1>Entre em Contato</h1>
      <p>Tem alguma dúvida ou deseja fazer uma reserva? Preencha o formulário abaixo ou entre em contato conosco!</p>
      <ul>
        <li><strong>Endereço:</strong> Rua Fictícia, 123, Bairro Gourmet, Cidade, País</li>
        <li><strong>Telefone:</strong> (11) 1234-5678</li>
        <li><strong>Email:</strong> contato@orion.com</li>
      </ul>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Seu nome" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Seu email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Sua mensagem" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
            <button type="submit" className="cta-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>
      <div className="map">
        <h2>Nos Encontre</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.294470145664!2d-47.05074642468965!3d-22.902507079258168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf463aa8d455%3A0x17bc5c6b4ce7c6ff!2sVit%C3%B3ria%20Hotel%20Concept%20-%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1736343699508!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default Contato;
