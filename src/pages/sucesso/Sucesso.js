import "./sucesso.css"
import { Link, useParams, useLocation } from "react-router-dom";
import Top from "../../components/top/Top";
import Dias from "../../components/dias/Dias";
import BotaoAssento from "../../components/botao-reservar-assento/BotaoAssento";

export default function Sucesso (){
  const {weekday, name, title, cpf, arrayteste  } = useParams()
  const dadosAssento = useLocation()
  console.log(dadosAssento.state.array)
 
  return (<>
  <div className="pedido-final">
    <h1 className="pedido">Pedido feito <br /> com sucesso!</h1>
    <div className="resumo">
      <h1>
      Filme e sessão
   
      </h1>
      <p>{dadosAssento.state.assento[2]}</p>
      <p> {dadosAssento.state.assento[3]} {dadosAssento.state.assento[1]}</p>
      
    </div>
    <div className="resumo">
      <h1>
       Ingressos
      </h1>
      
         {dadosAssento.state.array.map((item, index) =>(
        <p key={index}>Assento {item}</p>
       )) }
    </div>
    <div className="resumo">
      <h1>
        Comprador
      </h1> 
       
      <p>NOME: {dadosAssento.state.dado[0]} </p> 
      <p>CPF: {dadosAssento.state.dado[1]} </p> 
    </div>
  </div>
  <div className="botao-final"> 
  <Link to="/" > <BotaoAssento reservar={"Voltar pra Home"}/></Link>
  </div>
  
  </>)
}