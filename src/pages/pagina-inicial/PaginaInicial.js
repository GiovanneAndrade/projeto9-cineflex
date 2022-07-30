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
    <div className="pagina-inicial-filmes">
        <div className="lista-filmes">
              {filmes.map((item ) =>(
             <Link to={`/Horario/${item.id}`} >
                <div className="filmes">
                  <img src={item.posterURL} /> 
                </div>
              </Link> 
              )
              )}
          
        </div>
    </div>
    
  </>)
  
}

/* function ArrayFilmes({imagem}) {
  return(
    <div className="filmes">
       <img src={imagem} /> 
    </div>
  )
}

function FilmesContainer ({}){
  return (<>
  <div className="pagina-inicial-filmes">
    <div className="lista-filmes">
      <Link to="/Horario" >
       
      </Link> 
    </div>
  </div>
  </>)
} */