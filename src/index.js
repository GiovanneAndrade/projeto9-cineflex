import ReactDOM from 'react-dom';  
import App from './App';
function Lista() {
    return (
       <>
          <App/>
       </>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));