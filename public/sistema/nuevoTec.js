import { render } from '../others/renderizado.js';
import { addNavBarFunctions } from '../others/utils.js';
import { headerVisitas } from '../views/templateVisitas.js'
import { navbar } from '../views/templateHome.js'
import { cancha, jugadores_Jugada, headerBotonera } from '../views/templateNuevoTec.js'
import { api_post_jugadasAll } from '../apis/apiJugadasAll.js';
export function nuevoTec() {
    inicioVisitas()
}
//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
async function inicioVisitas() {

    let view = {};
    view.navbar = navbar();
    view.header = await headerVisitas();
    view.jugadores_Jugada = await jugadores_Jugada()

    view.cancha = await cancha();

    view.headerBotonera = await headerBotonera()

    render(view, true);
    addNavBarFunctions();
    ///////////////////////// inicioVisitas
    dibujar();

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
    let btnReinicio = document.getElementById('reiniciar');

    btnReinicio.addEventListener('click', () => {
        // adaptadas
        //  cantiJugadas = 0;
        swithDivino = 0;
        toques = 0;
        jugadores = 0;
        jugadasAll = [];
        jugadas = [];
        contaClick = 0;
        numJugador = 0;
        IdAnimacion00 = 0;
        IdAnimacion01 = 0;
        IdAnimacion02 = 0;
        IdAnimacion03 = 0;
        IdAnimacion04 = 0;
        //fin adaptadas

        posini = null;
        pointsClick = [];
        context.clearRect(0, 0, canvas.width, canvas.height);



    })

    let btnPausa = document.getElementById('pause');
    btnPausa.addEventListener('click', () => {

        console.log('Click en botón Pause');
        IdAnimacion00.pause();
        IdAnimacion01.pause();
        IdAnimacion02.pause();
        IdAnimacion03.pause();
        IdAnimacion04.pause();
        // posini = null;
        // jugadas.push({ x: 0, y: 0, numJugador });
        // jugadasAll.push(jugadas);
        // contaClick = 0;

    })

    let btnPlay = document.getElementById('play');



    btnPlay.addEventListener('click', () => {
        console.log('Click en botón Play');
        if (swithDivino == 0) {
            swithDivino = 1
            swal.close()
            animacionGral()

        } else {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'Elige una opción',
                text: "Atención!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Reproducir de Nuevo.',
                cancelButtonText: 'Continuar.',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {

                    animacionGral()

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    IdAnimacion00.play();
                    IdAnimacion01.play();
                    IdAnimacion02.play();
                    IdAnimacion03.play();
                    IdAnimacion04.play();
                }
            })


        }


        function animacionGral() {
            if (jugadasAll.length != 0) {
                console.log('Hay jugadas');
                console.log('son :', jugadasAll);

                //limpiar jugadas
                context.clearRect(0, 0, canvas.width, canvas.height);

                let numeroJugadas = jugadas.length;
                // console.log(`numeroJugadas = ${numeroJugadas} y jugadas = ${jugadas}`);

                let posini;
                let pos;

                if (numeroJugadas > 0) {

                    for (let i = 0; i < jugadas.length; i++) {

                        pos = jugadas[i];
                        console.log("pos", pos);
                        //console.log("pos", jugadas[i]);s
                        //posini.x = jugadas[i].x;
                        //posini.y = jugadas[i].y;
                        // console.log("posini  cargada", posini);
                        if (pos.x != 0) {

                            console.log("la pos X", pos);
                            ///   pos = jugadas[i + 1];
                            if (posini) {
                                context.beginPath();
                                context.strokeStyle = "transparent";
                                context.moveTo(posini.x, posini.y);
                                context.lineTo(pos.x, pos.y);
                                context.stroke();
                            }
                            posini = pos;
                            //pointsClick.push(posini);

                        } else {

                            posini = null;
                            contaClick = 0;
                        }
                    }
                }

                //Fin Play Jugada
            } else {
                console.log('No hay jugadas');

            }

            //Demo Fin

            //Demo Fin

            let jugador00 = jugadas.filter(element => element.numJugador == 0);
            let laXjugador00 = jugador00.map(element => element.x);
            let laYjugador00 = jugador00.map(element => element.y);


            if (jugador00.length != 0) {

                IdAnimacion00 = anime({
                    targets: '.pelota0',
                    translateX: laXjugador00,
                    translateY: laYjugador00,
                    easing: 'linear',
                    duration: 8000
                });
                IdAnimacion00
                console.log('IdAnimacion00', IdAnimacion00);
            }

            let jugador01 = jugadas.filter(element => element.numJugador == 1);
            let laXjugador01 = jugador01.map(element => element.x);
            let laYjugador01 = jugador01.map(element => element.y);

            if (jugador01.length != 0) {
                console.log('entro');
                IdAnimacion01 = anime({
                    targets: '.pelota1',
                    translateX: laXjugador01,
                    translateY: laYjugador01,
                    easing: 'linear',
                    duration: 8000
                });
                IdAnimacion01
            }

            let jugador02 = jugadas.filter(element => element.numJugador == 2);
            let laXjugador02 = jugador02.map(element => element.x);
            let laYjugador02 = jugador02.map(element => element.y);

            if (jugador02.length != 0) {
                console.log('entro');
                IdAnimacion02 = anime({
                    targets: '.pelota2',
                    translateX: laXjugador02,
                    translateY: laYjugador02,
                    easing: 'linear',
                    duration: 8000
                });
                IdAnimacion02
            }


            let jugador03 = jugadas.filter(element => element.numJugador == 3);
            let laXjugador03 = jugador03.map(element => element.x);
            let laYjugador03 = jugador03.map(element => element.y);

            if (jugador03.length != 0) {

                IdAnimacion03 = anime({
                    targets: '.pelota3',
                    translateX: laXjugador03,
                    translateY: laYjugador03,
                    easing: 'linear',
                    duration: 8000
                });
                IdAnimacion03
            }

            let jugador04 = jugadas.filter(element => element.numJugador == 4);
            let laXjugador04 = jugador04.map(element => element.x);
            let laYjugador04 = jugador04.map(element => element.y);


            if (jugador04.length != 0) {

                IdAnimacion04 = anime({
                    targets: '.pelota4',
                    translateX: laXjugador04,
                    translateY: laYjugador04,
                    easing: 'linear',
                    duration: 8000
                });
                IdAnimacion04
            }

        }

        /* funciona descomentar
            //    let laX = jugadas.map(element => element.x);
            //    let laY = jugadas.map(element => element.y);
           //     console.log('laX', laX)
             ///   console.log('laY', laY)
        
                var IdAnimacion = anime({
                    backgroundColor: "#FF0000",
                    targets: '.pelota',
                    translateX: laX,
                    translateY: laY,
                    easing: 'linear',
                    duration: 4000
                });
        */ //funciona fin descomentar

        //   IdAnimacion
        /*
            var tl = anime.timeline({
        
                easing: 'linear',
                duration: 4000
            });
        
            // Add children
            console.log(tl);
            tl
                .add({
                    backgroundColor: "#FF0000",
                    targets: '.pelota',
                    translateX: [laX[0], laX[1]],
                    translateY: [laY[0], laY[1]],
                    
                })
        
                .add({
                    backgroundColor: "#FF0000",
                    targets: '.pelota2',
                    translateX: [laX[3], laX[4]],
                    translateY: [laY[3], laY[4]],
                })
        
        **/
        /** 
         * codigo movimiento anterior
         * 
         * var IdAnimacion = anime({
            targets: '.pelota',
            translateX: laX,
            translateY: laY,
            easing: 'easeInOutQuad',
            duration: 3000
          });
        
          IdAnimacion
         */

        /*
                //limpiar jugadas
                context.clearRect(0, 0, canvas.width, canvas.height);
        
                let numeroJugadas = jugadas.length;
                console.log(`numeroJugadas = ${numeroJugadas} y jugadas = ${jugadas}`);
        
                if (numeroJugadas > 0) {
        
                    let posini;
        
                    for (let i = 0; i < cantiToques; i++) {
                        let pos = jugadas[i];
        
                        if (posini) {
                            context.beginPath();
                            context.strokeStyle = "#EC2300";
                            context.moveTo(posini.x, posini.y);
                            context.lineTo(pos.x, pos.y);
                            context.stroke();
                        }
                        posini = pos;
                        pointsClick.push(posini);
        
                    }
                }
        */

        //Fin Play Jugada
    });

    let btnGrabar = document.getElementById('grabar');
    btnGrabar.addEventListener('click', () => {
        //window.grabar.style.backgroundColor = 'red'
        window.imgBtnGrabar1.src = "./img/stop.png"
        efectoZoomInZoomOutGrabar()
        console.log('Click en botón Grabar');
        Swal.fire({
            title: 'Comienza la Grabacion, Desde ahora puedes colocar tus Jugadas  &#128517',
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
        //limpiar todo
        toques = 0;
        jugadores = 0;
        jugadasAll = [];
        jugadas = [];
        contaClick = 0;
        numJugador = 0;
        //fin adaptadas

        posini = null;
        pointsClick = [];
        context.clearRect(0, 0, canvas.width, canvas.height);
        //


        toques = document.getElementById('selectCantJugadas').value;
        toques = Number(toques) + 1;
        jugadores = document.getElementById('selectCantJugadores').value;

        console.log('cantidad de Jugadas', toques);
        console.log('cantidad Jugadores', jugadores);

    })


    let btnGuardarJugadas = document.getElementById('btnGuardarJugadas');
    btnGuardarJugadas.addEventListener('click', async() => {

        console.log('Hola btnGuardarJugadas', jugadasAll);
        // let datosAguardad = {
        //     nombre: document.getElementById('inpNombreLista').value,
        //     jugadas: jugadasAll
        // }
        //let postJugada = await api_post_jugadasAll(datosAguardad);
    });

}




async function saveJugada(jugadas) {



}

/**
 * 06/07
 * Falta definir los array dde canti jugadaas con cantidad de toques
 * 
 */

//Pinta Jugadores al evento click



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