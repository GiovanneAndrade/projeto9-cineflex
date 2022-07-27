import "./paginaInicial.css";
import { Link } from "react-router-dom";
import Top from '../../components/top/Top'
import img from "./image/image 3.png"


export default function PaginaInicial (){
  const filmes = [{
    id: 1,
    img: "",
    nome:""
  },
]
  return (
  <>
  
  <Top texto={"Selecione o filme"}/>
  <div className="pagina-inicial-filmes">
 <div className="lista-filmes">
 <Link to="/Horario" >
  <div className="filmes">
      <img src={img}/>
    </div>
  </Link> 
  <Link to="/Horario" >
  <div className="filmes">
      <img src={img}/>
    </div>
  </Link> 
  <Link to="/Horario" >
  <div className="filmes">
      <img src={img}/>
    </div>
  </Link> 
  <Link to="/Horario" >
  <div className="filmes">
      <img src={img}/>
    </div>
  </Link> 
    
    
  </div>
  
  </div>
  </>)
  
}