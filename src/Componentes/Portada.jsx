import { Menu } from './Menu';
import foto from '../img/foto.jpg';
import './style/Portada.css';

export const Portada = () => {
  return (
    <div className="portada">
      <h3 className="desc">FRONTEND DEVELOPER</h3>
      <div className="resp">
        <h1 className="titulo">Hola, soy Rodrigo Ramírez <br/> Desarrollador Frontend</h1>
        <img src={foto} alt="" className="foto" />
      </div>
      <Menu />
    </div>
  )
}
