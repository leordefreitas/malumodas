import React from 'react';
import './App.css';

// componentes
import Header from './components/header/Header';
import SecChamativa from './components/secChamativa/SecChamativa';
import SecGaleria from './components/secGaleria/SecGaleria';
import SecSobre from './components/secSobre/SecSobre';

function App() {
  return (
    <div className="App">
      <Header />
      <SecChamativa />
      <SecGaleria />
      <SecSobre />
    </div>
  );
}

export default App;
