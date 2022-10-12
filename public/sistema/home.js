import { navBarPrincipal } from "../views/templateHome.js";
import { render } from "../others/renderizado.js";


export function home(view, model) {
    // clear view
    view = {};

    view.navbarPrinc = navBarPrincipal(model); //almacena en un nuevo objeto el nav principal 
    
    render(view, true);

    addButtonsFunction() 
    
    function addButtonsFunction() { //navBar principal
        
        document.querySelector('#sistemaBtn').onclick = event => {
            console.log('sistemaBtn button');
            let customEvent = new CustomEvent('ready', { detail: 'listaSistemaBtn' });
            document.dispatchEvent(customEvent);
        };

        document.querySelector('#visitasBtn').onclick = event => {
            console.log('VisitasBtn button');
            let customEvent = new CustomEvent('ready', { detail: 'listaVisitasBtn' });
            document.dispatchEvent(customEvent);
        };

        document.querySelector('#tecnicoBtn').onclick = event => {
            console.log('VisitasBtn button');
            let customEvent = new CustomEvent('ready', { detail: 'listaTecnicosBtn' });
            document.dispatchEvent(customEvent);
        };


    }
}


