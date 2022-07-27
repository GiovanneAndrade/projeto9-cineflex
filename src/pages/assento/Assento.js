import "./assento.css"
import { Link } from "react-router-dom";
import Top from '../../components/top/Top'
import BotaoAssento from "../../components/botao-reservar-assento/BotaoAssento";
import Footer from "../../components/footer/Footer";

export default function Assento (){
  return (
  <>
<div className="assento-container">
    <Top texto={"Selecione o(s) assento(s)"}/>

    <div className="assento">
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>
      <div className="escolher-assento">1</div>  
      <div className="escolher-assento">1</div>  
      
    </div>
    <div className="status-assento">
      <div className="status-legenda">
        <div className="disponivel"></div>  
        <p>disponivel</p>
      </div>

      <div className="status-legenda">
        <div className="indisponivel"></div> 
        <p>indisponivel</p>
      </div>

      <div className="status-legenda">
        <div className="ocupado"></div>  
        <p>ocupado</p>
      </div>
    <div>
      
 </div>
</div>
  <div className="inputs">
    <p>Nome do comprador:</p>
    <input  placeholder="Digite seu nome..."   type="text" />
    <p className="cpf">CPF do comprador:</p>
    <input placeholder="Digite seu nome..."   type="text" />
    <Link to="/Sucesso" ><BotaoAssento reservar={'reservar'}/></Link>
  </div>
   

  
  </div>
  <Footer/>
  </>
  )
}