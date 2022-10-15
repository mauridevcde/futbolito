import { render } from '../others/renderizado.js';
import { addNavBarFunctions } from '../others/utils.js';
import { headerVisitas } from '../views/templateVisitas.js';
import { navbar } from '../views/templateHome.js';
import { cancha, headerBotonera, jugadores_Jugada } from '../views/templateCanchaPanel.js';
import { api_get_jugadasAll } from '../apis/apiJugadasAll.js';

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
    let jugaditas = await getJugadas();
    dibujar(jugaditas);
    

}

function dibujar(jugaditas) {

    // adaptadas
    let toques = 0;
    let jugadores = 0;
    let jugadasAll = jugaditas[2].jugadas;
    let jugadas = jugaditas[2].jugadas;
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
                //console.log('Hay jugadas');
               // console.log('son :', jugadasAll);

                let numeroJugadas = jugadas.length;
                // console.log(`numeroJugadas = ${numeroJugadas} y jugadas = ${jugadas}`);

                let posini;
                let pos;

                if (numeroJugadas > 0) {

                    for (let i = 0; i < jugadas.length; i++) {

                        pos = jugadas[i];
                       // console.log("pos", pos[i].x);
                        //console.log("pos", jugadas[i]);s
                        //posini.x = jugadas[i].x;
                        //posini.y = jugadas[i].y;
                        // console.log("posini  cargada", posini);
                        if (pos[i].x != 0) {

                           //console.log("la pos X", pos);
                            ///   pos = jugadas[i + 1];
                            if (posini) {
                                context.beginPath();
                                context.strokeStyle = "transparent";
                                context.moveTo(posini.x, posini.y);
                                context.lineTo(pos[i].x, pos[i].y);
                                context.stroke();
                            }
                            posini = pos[i];
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

            let jugador00 = []

            for (let i = 0; i < jugadasAll.length; i++) {
                const element = jugadasAll[0];
                if (element[i].numJugador == 0) {
                    jugador00.push(element[i])
                }
                
            }

            

            console.log('jugador00',jugador00);
            let laXjugador00 = jugador00.map((element) => element.x);
            let laYjugador00 = jugador00.map((element) => element.y);


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

            let jugador01 = []

            for (let i = 0; i < jugadasAll.length; i++) {
                const element = jugadasAll[0];
                if (element[i].numJugador == 1) {
                    jugador01.push(element[i])
                }
                
            }

            

           // console.log('jugador01',jugador01);
            let laXjugador01 = jugador01.map((element) => element.x);
            let laYjugador01 = jugador01.map((element) => element.y);

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

            let jugador02 = []

            for (let i = 0; i < jugadasAll.length; i++) {
                const element = jugadasAll[0];
                if (element[i].numJugador == 1) {
                    jugador02.push(element[i])
                }
                
            }

            

           // console.log('jugador01',jugador01);
            let laXjugador02 = jugador01.map((element) => element.x);
            let laYjugador02 = jugador01.map((element) => element.y);
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


            let jugador03 = []

            for (let i = 0; i < jugadasAll.length; i++) {
                const element = jugadasAll[0];
                if (element[i].numJugador == 1) {
                    jugador03.push(element[i])
                }
                
            }

            

           // console.log('jugador01',jugador01);
            let laXjugador03 = jugador03.map((element) => element.x);
            let laYjugador03 = jugador03.map((element) => element.y);

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

            let jugador04 = []

            for (let i = 0; i < jugadasAll.length; i++) {
                const element = jugadasAll[0];
                if (element[i].numJugador == 1) {
                    jugador04.push(element[i])
                }
                
            }

            

           // console.log('jugador01',jugador01);
            let laXjugador04 = jugador04.map((element) => element.x);
            let laYjugador04 = jugador04.map((element) => element.y);


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

    });




}



async function getJugadas() {

   const jugadas= await api_get_jugadasAll();
   
   console.log("las Jugadas", jugadas);
   return jugadas;

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
