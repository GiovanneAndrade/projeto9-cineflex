import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Assento from "../assento/Assento"
import Horario from "../horario/Horario"
import PaginaInicial from "../pagina-inicial/PaginaInicial"
import Sucesso from "../sucesso/Sucesso"
import "./global.css"
import Nav from '../../components/nav/Nav'


function App (){
  return(
    <>
    <Nav/>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<PaginaInicial/>}/>
        <Route path="/Horario/:id" element ={<Horario/>}/>
        <Route path="/Assento" element ={<Assento/>}/>
        <Route path="/Sucesso" element ={<Sucesso/>}/>
      </Routes>


    </BrowserRouter>
  
    </>
  )
}
export default App