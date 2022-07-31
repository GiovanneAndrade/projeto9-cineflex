import "./sucesso.css"
import { Link, useParams } from "react-router-dom";
import Top from "../../components/top/Top";
import Dias from "../../components/dias/Dias";
import BotaoAssento from "../../components/botao-reservar-assento/BotaoAssento";

export default function Sucesso (){
  const {name} = useParams()
  console.log(name)
  return (<>
  <div className="pedido-final">
    <h1 className="pedido">Pedido feito <br /> com sucesso!</h1>
    <div className="resumo">
      <h1>
      Filme e sessão
    
      </h1>
      <p>Nome do filme </p>
      <p>data do filme hora do filme </p> 
      
    </div>
    <div className="resumo">
      <h1>
      Filme e sessão
      </h1>
      <p>Nome do filme </p>
      <p>data do filme hora do filme </p> 
    </div>
    <div className="resumo">
      <h1>
      Filme e sessão
      </h1>
      <p>Nome do filme </p>
      <p>data do filme hora do filme </p> 
    </div>
  </div>
  <div className="botao-final"> 
  <Link to="/" > <BotaoAssento reservar={"Voltar pra Home"}/></Link>
  </div>
  
  </>)
}