import "./assento.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Top from '../../components/top/Top'
import BotaoAssento from "../../components/botao-reservar-assento/BotaoAssento";
import Footer from "../../components/footer/Footer";

export default function Assento (){

  const {id} = useParams()
  const [assento, setAssento] = useState([])
  const [dia, setDia] = useState([])
  const [semana, setSemana] = useState([])
  const [hora, setHora] = useState([]) 
  const [color, setColor] = useState('#C3CFD9')
  const [colorId, setColorId] = useState([])
  console.log(colorId)
    useEffect(() => {
  fetch(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${id}/seats`)
      .then(res => res.json())
      .then((data) => {
        setAssento(data.seats)
        setDia(data.movie)
        setSemana(data.day)
        setHora(data)
      })
  },[id])


const arrayteste =[
  semana.weekday, hora.name, dia.title
]
 
console.log(arrayteste)
 
 

  return (
    
  <>
  
<div className="assento-container">
    <Top texto={"Selecione o(s) assento(s)"}/>

    <div  className="assento">
    {assento.map((dado) =>  (
      
   <button className="escolher-assento" style={{ background: dado.isAvailable ? color :"#FBE192"}}  onClick={() => {
      if(dado.isAvailable === false) {
        return alert ("Esse assento não está disponível")
      }else{
        setColorId(dado.id)
        setColor('#8DD7CF')
      }
      if (color === '#8DD7CF') {
        setColorId("")
        setColor('#C3CFD9')
      }
     }} 
    >
      <span>{dado.name}</span>
   </button> 
))}   
    </div>


    <div className="status-assento">
      <div className="status-legenda">
        <div className="disponivel"></div>  
        <p>selecionado</p>
       
      </div>

      <div className="status-legenda">
        <div className="indisponivel"></div> 
        <p>disponivel</p>
      </div>

      <div className="status-legenda">
        <div className="ocupado"></div>  
        <p>indisponivel</p>
      </div>
    <div>
      
 </div>
</div>
  <div className="inputs">
    <p>Nome do comprador:</p>
    <input  placeholder="Digite seu nome..."   type="text"  />
    <p className="cpf">CPF do comprador:</p>
    <input placeholder="Digite seu CPF..."   type="number" />
    <Link to="/Sucesso" ><BotaoAssento reservar={'reservar'}/></Link>
  </div>
   

  
  </div>
  

  <Footer weekday={semana.weekday} date={hora.name} foto={dia.posterURL} titulo={dia.title}/>
  </>
  )
}