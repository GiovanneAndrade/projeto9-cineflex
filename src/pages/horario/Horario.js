import  "./horario.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Top from '../../components/top/Top'
import Dias from "../../components/dias/Dias";
import Botao from "../../components/botao-reservar/Botao";
import Footer from "../../components/footer/Footer";
import Assento from "../assento/Assento";

export default function Horario (props){
const {id, title} = useParams()
const [filmes, setFilmes] = useState([])
const [foto, setFoto] = useState([])
 


  useEffect(() => {
fetch(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`)
    .then(res => res.json())
    .then((data) => {
      setFilmes(data.days)
      setFoto(data)
    })
    

},[id])


  return (<>

<img src={props.nome} />
<Top texto={"Selecione o horário"}/>
      {filmes.map((dado, index) => (
        <div key={index}>
        
          <Dias >
            <span >{dado.weekday}</span>
            <span>{dado.date}</span>
          </Dias>

            <div  className="botao-horario">
          {dado.showtimes.map((show, index) =>(
              <Link key={index} to={`/Assento/${show.id}`}>
                <Botao botao={show.name}/> 
              </Link> 
          ))}
            </div>
        </div>
      ))} 
  
 
      

 

<Footer  foto={foto.posterURL} titulo={foto.title}/>

  </>)
}

