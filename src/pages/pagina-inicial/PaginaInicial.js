import "./paginaInicial.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Top from '../../components/top/Top'
import img from "./image/image 3.png"
import Horario from "../horario/Horario"


export default function PaginaInicial (props){

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    fetch('https://mock-api.driven.com.br/api/v7/cineflex/movies')
    .then(res => res.json())
    .then(data => setFilmes(data))
  },[])

  return (
  <>
  <Top texto={"Selecione o filme"}/>
  {filmes.map((item, index) =>(
  <ArrayFilmes key={index}   imagem={item.posterURL} nome={item.nome}/>)
)}
  
  </>)
  
}

function ArrayFilmes(
  {
  imagem
  }
  ) {
  return(
    <>
      <div className="pagina-inicial-filmes">
        <div className="lista-filmes">
          <Link to="/Horario" >
            <div className="filmes">
               <img src={imagem} /> 
            </div>
          </Link> 
        </div>
      </div>
    </>
  )
}