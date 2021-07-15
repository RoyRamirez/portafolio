import './style/About.css';
import stack from '../img/stack.png';
import react from '../img/react.png';

export const About = () => {
  return (
    <div id="about">
      <div className="img-cont">
        <h1>About</h1>
      </div>
      <div className="descripcion">
        <h5 className="subtitulo">Soy un desarrollador Frontend que radica en Oaxaca México</h5>
        <p className="texto">Egresado de Ingeniería en Sistemas Computacionales con una pasión por el desarrollo web</p>
        <h5 className="subtitulo">Aprendizaje continuo</h5>
        <p className="texto">He desarrollado algunos proyectos por mi cuenta que podrás ver en la parte de abajo. Sigo aprendiendo tecnologías actuales y funcionales dentro de este ambiente web. Espero poder colaborar contigo.</p>
      </div>
      <div className="tecnologias">
        <h3>Las tecnologías que utilizo</h3>
        <img src={stack} alt="" className="stack"/>
        <img src={react} alt="" className="react"/>
      </div>
    </div>
  )
}
