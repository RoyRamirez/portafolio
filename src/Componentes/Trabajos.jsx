import React from 'react'
import { Trabajo } from './Trabajo';
import imgfakebook from '../img/fakebook.png';
import imgtareas from '../img/tareas.png';
import imginvie from '../img/invie.png';
import './style/Trabajos.css';

export const Trabajos = () => {
  return (
    <div className="trab-cont" id="trabajos">
      <div className="img-cont">
        <h1>Proyectos</h1>
      </div>
      <div className="trabajos">
        <Trabajo pagina="https://invie-guitar.netlify.app/"  repositorio="https://github.com/RoyRamirez/invie-responsive" imgsrc={imginvie} />
        <Trabajo pagina="https://fakebook-app.netlify.app/"  repositorio="https://github.com/RoyRamirez/Fakebook-client" imgsrc={imgfakebook} />
        <Trabajo pagina="https://pendientes-app.netlify.app/"  repositorio="https://github.com/RoyRamirez/Lista-tareas-" imgsrc={imgtareas} />
      </div>
    </div>
  )
}
