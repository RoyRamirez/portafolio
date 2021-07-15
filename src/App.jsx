import React from 'react';
import { Portada } from './Componentes/Portada';
import { About } from './Componentes/About';
import { Trabajos } from './Componentes/Trabajos';
import { Contacto } from './Componentes/Contacto';
import { Footer } from './Componentes/Footer';
import './App.css';

export function App () {
  return (
    <div>
      <Portada />
      <About />
      <Trabajos />
      <Contacto />
      <Footer />
      {/* blog */}
    </div>
  )
}
