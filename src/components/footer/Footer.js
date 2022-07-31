import "./footer.css"

export default function Footer({foto, titulo, weekday, date}){
  return(<>
  <div className="footer-base">
  <div className="filmes-footer">
    <img src={foto}/>
      
  </div>
  <p className="p-footer"> {titulo} <br />{weekday} {date}</p>

  </div>
  </>)
}