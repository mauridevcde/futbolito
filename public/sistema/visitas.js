import { render } from '../others/renderizado.js';
import { addNavBarFunctions } from '../others/utils.js';
import { headerVisitas } from '../views/templateVisitas.js'
import { navbar } from '../views/templateHome.js'
import { cancha, headerBotonera, jugadores_Jugada } from '../views/templateCanchaPanel.js'

export function Visitas() {
    inicioVisitas()
}
//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
async function inicioVisitas() {

    let view = {};
    view.navbar = navbar();
    view.header = await headerVisitas();
 view.jugadores_Jugada = await jugadores_Jugada();

    view.cancha = await cancha();

    view.headerBotonera = await headerBotonera()

    render(view, true);
    addNavBarFunctions();
    ///////////////////////// inicioVisitas
    dibujar();
    await capturar()

}

function dibujar() {

    // adaptadas
    let toques = 0;
    let jugadores = 0;
    let jugadasAll = [];
    let jugadas = [];
    let contaClick = 0;
    let numJugador = 0;
    //fin adaptadas

    //Original 
    let pointsClick = [];
    let posini;
    let canvas;
    let context;

    canvas = document.getElementById('cancha');
    context = canvas.getContext("2d");
    canvas.addEventListener('click', DrawClick, false);

    function DrawClick(e) {


        /*
                //funcion original
                let pos = getMousePos(canvas, e);
        
                if (posini) {
                    context.beginPath();
                    context.strokeStyle = "#000";
                    context.moveTo(posini.x, posini.y);
                    context.lineTo(pos.x, pos.y);
                    context.stroke();
                }
                posini = pos;
                pointsClick.push(posini);
        
                // fin funcion original
        */
        //adaptadas


        let pos = getMousePos(canvas, e);

        contaClick = contaClick + 1;
        //cantiJugadas = cantiJugadas + 1;
        //  jugadas.push(pos);
        // jugadasAll.push(jugadas);


        if (numJugador > jugadores) {
            alert("ya termino el dibujo");

        } else {

            if (numJugador == jugadores) {
                //alert("jugadores == a numJugador");

                Swal.fire({
                    title: 'Ya no tienes jugadas  &#128517',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#c9ffbf url(/images/trees.png)',
                    backdrop: `
                    rgba(68, 226, 139, 0.5)
                      url('./img/pelotaenmovimiento.gif')
                      left top
                      no-repeat
                    `
                }).then(() => {
                    window.imgBtnGrabar1.src = "./img/rec.png";
                    animacionLoopGrabacion.reset();

                    //animacionLoopGrabacion.pause();

                })

            } else {

                if (numJugador <= jugadores) {

                    if (toques == null || toques == 0 || toques == undefined) {
                        //alert("Debes cargar toques");
                        Swal.fire({
                            title: 'Favor cargar Toques  &#128517',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            background: '#c9ffbf url(/images/trees.png)',
                            backdrop: `
                            rgba(68, 226, 139, 0.5)
                              url('./img/pelotaenmovimiento.gif')
                              left top
                              no-repeat
                            `
                        })
                    } else {

                        if (contaClick <= toques) {
                            // console.log(`clicks = ${contaClick} > ${toques} toques `);

                            //jugadas.push({ x: contaClick, y: toques, jugador: numJugador });

                            if (posini) {
                                context.beginPath();
                                context.strokeStyle = "#000";
                                context.moveTo(posini.x, posini.y);
                                context.lineTo(pos.x, pos.y);
                                context.stroke();
                            }
                            posini = pos;
                            pointsClick.push(posini);
                            pos.numJugador = numJugador;
                            console.log('la pos de la jugada', pos);
                            jugadas.push(pos);
                            jugadasAll.push(jugadas);
                        }

                        if (contaClick > toques) {
                            //alert("ingrese nuevo player");
                            Swal.fire({
                                title: 'Ingresa el nuevo Jugador!!  &#128517',
                                width: 600,
                                padding: '3em',
                                color: '#716add',
                                background: '#c9ffbf url(/images/trees.png)',
                                backdrop: `
                                rgba(68, 226, 139, 0.5)
                                  url('./img/pelotaenmovimiento.gif')
                                  left top
                                  no-repeat
                                `
                            })
                            posini = null;

                            /// jugadas.push({ x: 0, y: 0 });
                            jugadas.push({ x: 0, y: 0, numJugador });
                            jugadasAll.push(jugadas);
                            contaClick = 0;

                            numJugador += 1;
                            contaClick = 0;
                        }
                    }
                }
            }

        }
    }

    function getMousePos(canvas, evt) {

        let rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    var swithDivino = 0
    var IdAnimacion00
    var IdAnimacion01
    var IdAnimacion02
    var IdAnimacion03
    var IdAnimacion04
  



}

async function saveJugada(jugadas) {


}

/**
 * 06/07
 * Falta definir los array dde canti jugadaas con cantidad de toques
 * 
 */

//Pinta Jugadores al evento click
async function capturar() {

    let jugadorcitos = document.querySelectorAll(".spJugadores")

    jugadorcitos.forEach(btn => {

        btn.addEventListener('click', async () => {

            if (btn.style.backgroundColor == "black") {
                btn.style.background = "transparent"
                btn.style.color = "black"
            } else {
                btn.style.background = "black"
                btn.style.color = "white"
            }
        })
    })
}


var animacionLoopGrabacion;
function efectoZoomInZoomOutGrabar() {
    let loopBegan = 0;
    let loopCompleted = 0;

    animacionLoopGrabacion = anime({
        targets: '#grabar',
        scale: 1.5,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutCirc',
        loopBegin: function (anim) {
            loopBegan++;
            //beginLogEl.value = 'loop began : ' + loopBegan;
        },
        loopComplete: function (anim) {
            loopCompleted++;
            //completeLogEl.value = 'loop completed : ' + loopCompleted;
        }
    });
    animacionLoopGrabacion
}
