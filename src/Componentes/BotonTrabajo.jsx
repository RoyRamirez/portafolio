import './style/BotonTrabajo.css';

export const BotonTrabajo = ({ text, href }) => {
  return (
    <button className="btn"><a href={href}>{text}</a></button>
  )
}
