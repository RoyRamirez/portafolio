// import { FaUser, FaRegEnvelope } from "react-icons/fa";
import './style/Contacto.css';

export const Contacto = () => {
  return (
    <div className="cont-con">
      <div className="img-cont">
        <h1>Contacto</h1>
      </div>
      <div className="contacto" id="contacto">
        <form action="https://formspree.io/f/xknkvokj" method="POST" className="form">
          <h3>Contacto</h3>
          <input type="text" name="" id="" placeholder="Tu nombre" className="inputs"/>
          <input type="email" name="_replyto" id="" placeholder="Tu email" className="inputs"/>
          <textarea name="message" id="" placeholder="Deja tu mensaje..." className="inputs"></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>      
      </div>
    </div>
  )
}
