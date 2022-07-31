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


 let selecionados = []

 function EscolherAssento({assento}) {
   const [color, setColor] = useState('#C3CD9')

   return (
     <button 
         className="escolher-assento" 
         style={{ background: assento.isAvailable ? color :'#FBE192'}}  
         onClick={() => {
           if(assento.isAvailable === false) {
             return alert ("Esse assento não está disponível")
           }else{
             setColor('#8DD7CF')
             selecionados.push(assento.id)
             
           }
           if (color === '#8DD7CF' ) {
             setColor('#C3CFD9')

             const remove = assento.id
             selecionados = selecionados.filter((item) => {
               return item !== remove
             })
           }  
         }} 
       >
         <span>{assento.name}</span>
       </button> 
   )
 }
 

  return (
    
  <>
  
<div className="assento-container">
    <Top texto={"Selecione o(s) assento(s)"}/>

    <div  className="assento">
      {assento.map((assento) => (<EscolherAssento assento={assento}/>))}
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
  
   
  <Formulario />
  
  </div>
  <Footer weekday={semana.weekday} date={hora.name} foto={dia.posterURL} titulo={dia.title}/>
  </>
  )

  function Formulario ({selecionados}) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
  
    function handleForm(e){
      e.preventDefault();
      
      const dados = {
        nome,
        cpf,
      }
      console.log(dados)
    }
 
    
    
      return (
        <form onSubmit={handleForm} className="inputs">
          <p>Nome do comprador:</p>
          <input  placeholder="Digite seu nome..."   type="text" required onChange={(e)=> setNome(e.target.value)}/>
          <p className="cpf">CPF do comprador:</p>
          <input placeholder="Digite seu CPF..."   type="number" required  onChange={(e)=> setCpf(e.target.value)}/>
          {/* <Link to="/Sucesso" ><BotaoAssento reservar={'reservar'}/></Link>  */}
           <button type="submit" className="botaoassento">enviar</button> 
      </form>
      )
    }


}



