import  "./horario.css";
import { Link } from "react-router-dom";
import Top from '../../components/top/Top'
import Dias from "../../components/dias/Dias";
import Botao from "../../components/botao-reservar/Botao";
import Footer from "../../components/footer/Footer";

export default function Horario (){
  return (<>
<Top texto={"Selecione o horário"}/>
<Dias dias={"Quinta-feira - 24/06/2021"}/>

<div className="botao-horario">
  <Link to="/Assento" >
    <Botao botao={"15:00"}/> 
  </Link> 
  <Link to="/Assento" >
      <Botao botao={"15:00"}/>
  </Link>
</div>

<Dias dias={"Sexta-feira - 25/06/2021"}/>
<div className="botao-horario">
  <Link to="/Assento" >
    <Botao botao={"15:00"}/>
  </Link> 
  <Link to="/Assento" >
    <Botao botao={"15:00"}/>
  </Link> 
</div>
<Footer/>
  </>)
}