import React from 'react';
import './maincomponet.css';
import Cardapio from './Cardapio';
import Banner from './Banners.jsx';

import Sobre from './sobre';
import Contato from './Contato';

function MainContent() {
  return (
    <main className="main-content">
      <Banner initialSlides={1} categoria="restaurante"> </Banner>
      <section id='sobre'>
        <Sobre></Sobre>
      </section>
      <section id='cardapio'>
        <Cardapio></Cardapio>
      </section>
      
      <Banner initialSlides={1} categoria="pratos"> </Banner>

      <section id='contato'>
        <Contato></Contato>
      </section>
      
    </main>
  );
}

export default MainContent;