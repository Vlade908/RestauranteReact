import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainComponent';
import Footer from './components/Footer';
import Cardapio from './components/Cardapio';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;