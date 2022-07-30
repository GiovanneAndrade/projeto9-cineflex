import  "./horario.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Top from '../../components/top/Top'
import Dias from "../../components/dias/Dias";
import Botao from "../../components/botao-reservar/Botao";
import Footer from "../../components/footer/Footer";

export default function Horario (){
const {id} = useParams()
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


<Top texto={"Selecione o horário"}/>
      {filmes.map((dado) => (
        <>
          <Dias>
            <span>{dado.weekday}</span>
            <span>{dado.date}</span>
          </Dias>

            <div className="botao-horario">
          {dado.showtimes.map((show) =>(
              <Link to="/Assento">
                <Botao botao={show.name}/> 
              </Link> 
          ))}
            </div>
        </>
      ))} 
  
 
      

<Footer>
<div className="filmes-footer">
    <img src={foto.posterURL}/>
  </div>
  <p> {foto.title}</p>
</Footer>
  </>)
}