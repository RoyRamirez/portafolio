import './style/Trabajo.css';
import { BotonTrabajo } from './BotonTrabajo';

export const Trabajo = ({ pagina, repositorio, imgsrc }) => {
  return (
    <div className="trabajo">
      <img src={imgsrc} alt="" className="bgnd-img"/>
      <p className="trabajo-desc">Esta es la descripcion del proyecto</p>
      <div className="botones">
        <BotonTrabajo text="Ver" href={pagina} />
        <BotonTrabajo text="Repositorio" href={repositorio} />
      </div>
    </div>
  )
}
