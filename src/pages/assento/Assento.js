import "./assento.css"

import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import Top from '../../components/top/Top'
import BotaoAssento from "../../components/botao-reservar-assento/BotaoAssento";
import Footer from "../../components/footer/Footer";





export default function Assento (){

  const {idSessao} = useParams()
  const [assento, setAssento] = useState([])
  const [dia, setDia] = useState([])
  const [semana, setSemana] = useState([])
  const [hora, setHora] = useState([]) 
  


    useEffect(() => {
  fetch(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
      .then(res => res.json())
      .then((data) => {
        setAssento(data.seats)
        setDia(data.movie)
        setSemana(data.day)
        setHora(data)
      })
  },[idSessao])
  let arrayteste =[]
  let somenteAssento = [ 
     semana.weekday,
      hora.name,
      dia.title, 
      semana.date]
  

 
console.log(somenteAssento)
 


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
             arrayteste.push(assento.name)
           }
           if (color === '#8DD7CF' ) {
             setColor('#C3CFD9')

             const remove = assento.id
             selecionados = selecionados.filter((item) => {
               return item !== remove
             })
             const removeName = assento.name
             arrayteste = arrayteste.filter((i) => {
               return i !== removeName
             })

           }  
           console.log(arrayteste)
           console.log(selecionados)

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
      {assento.map((assento, index) => (<EscolherAssento key={index} assento={assento}/>))}
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
  
   
  <Formulario arrayteste={arrayteste} selecionados={selecionados}/>
  
  </div>
  <Footer weekday={semana.weekday} date={hora.name} foto={dia.posterURL} titulo={dia.title}/>
  </>
  )

  function Formulario ({arrayteste, selecionados}) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    let navigate = useNavigate()
    
    
  
    function handleForm(e){
      e.preventDefault();
      if(selecionados.length === 0){
        return alert('Escolha pelo menos um acento!')
      }
      
      console.log(selecionados)
      
      const dados = {
        ids:selecionados,
        name: nome,
        cpf,
      }
      let dado = [nome, cpf]
      const enviarPost = {...[selecionados], ...dados}
    /*   navigate(`/Sucesso/${semana.weekday}/${dados.name}/${dia.title}/${dados.cpf}/${arrayteste[1]}`) */
    navigate("/Sucesso", {
     state:{
      array: arrayteste,
      assento: somenteAssento,
      dado: dado
      }
      
    }
    )
      fetch('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',{
        method: 'POST',
        body: JSON.stringify(enviarPost),
        headers:{ 'content-type': 'application/json'},
      })
      .then(Response => Response.json())
      .then(json => console.log(json))
      .catch((err) => console.log(err));
      
      
      const sucesso = {...arrayteste, ...dados}
     
   
    }
    
     
    
    
      return (
        <form onSubmit={handleForm} className="inputs">
          <p>Nome do comprador:</p>
          <input  placeholder="Digite seu nome..."   type="text" required onChange={(e)=> setNome(e.target.value)}/>
          <p className="cpf">CPF do comprador:</p>
          <input placeholder="Digite seu CPF..."   type="number" required  onChange={(e)=> setCpf(e.target.value)}/>
           {/* <Link to="/Sucesso" ><BotaoAssento reservar={'reservar'}/></Link> */} 
            <button /* disabled={selecionados.length === 0} */ type="submit" className="botaoassento">enviar</button>  
      </form>
      )
    }


}



