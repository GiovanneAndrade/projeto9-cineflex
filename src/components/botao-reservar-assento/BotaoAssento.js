import "./botaoassento.css"

export default function  BotaoAssento({reservar}){
  return(<>
  <button type="submit" className="botaoassento">
  {reservar}
  </button>
  
  </>)
}