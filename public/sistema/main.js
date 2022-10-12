import { home } from "../sistema/home.js"
import {sistema} from "../sistema/sistema.js"
import {Visitas} from "../sistema/visitas.js"
import { nuevoTec } from "../sistema/nuevoTec.js";
 
let view = {};
let model = {};

console.log("render");

home(view, model)

document.addEventListener('ready', event => {

    if (event.detail == 'listaSistemaBtn') {
      sistema(view, model);
    } else if (event.detail == 'listaVisitasBtn') {
      Visitas(view, model);
    } else if (event.detail == 'exit') {
        home(view, model);
    }else if (event.detail == 'listaTecnicosBtn') {
      nuevoTec(view, model);
    }
}) 