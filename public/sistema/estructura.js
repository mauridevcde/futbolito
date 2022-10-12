let cantiJugadores = 5;

switch (cantiJugadores) {
    case 1:
        console.log('Eligio Jugadores cantidad:', cantiJugadores);

        let laX = jugadas.map(element => element.x && element.numJugador ==0);
        let laY = jugadas.map(element => element.y && element.numJugador==0);
        console.log('laX', laX)
        console.log('laY', laY)

        var IdAnimacion = anime({
            backgroundColor: "#FF0000",
            targets: '.pelota',
            translateX: laX,
            translateY: laY,
            easing: 'linear',
            duration: 4000
        });

        break;
    case 2:
        console.log('Eligio Jugadores cantidad:', cantiJugadores);
        break;
    case 3:
        console.log('Eligio Jugadores cantidad:', cantiJugadores);
        break;
    case 4:
        console.log('Eligio Jugadores cantidad:', cantiJugadores);
        break;
    case 5:
        console.log('Eligio Jugadores cantidad:', cantiJugadores); break;
    default:
        console.log('Lo lamentamos, por el momento experimentamos un error '+ cantiJugadores + '.');
}

