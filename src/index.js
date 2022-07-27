import ReactDOM from 'react-dom';  
import App from './pages/global/App';
function Lista() {
    return (
       <>
          <App/>
       </>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));