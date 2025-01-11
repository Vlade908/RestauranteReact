import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '/IMGS/orion.png';  // Certifique-se de substituir com o caminho real da logo

function Header() {
  const [activeSection, setActiveSection] = useState('');

  // Função para detectar a seção ativa
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home">Home</a>
          </li>
          <li className={activeSection === 'sobre' ? 'active' : ''}>
            <a href="#sobre">About</a>
          </li>
          <li className={activeSection === 'cardapio' ? 'active' : ''}>
            <a href="#cardapio">Cardapio</a>
          </li>
          <li className={activeSection === 'contato' ? 'active' : ''}>
            <a href="#contato">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
