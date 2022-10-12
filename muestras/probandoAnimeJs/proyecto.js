


var canvas = document.getElementById("cancha");
var ctx = canvas.getContext("2d");
var IdAnimacion
function followCursor(e) {
  IdAnimacion = anime({
    targets: '.pelota',
    translateX: [144,240, 654],
    translateY: [471,543, 737],
    easing: 'easeInOutQuad',
    duration: 3000
  });
}

let pe = document.querySelector('#btnAction')

pe.addEventListener('click', (e) => {
  e.preventDefault();
  followCursor(e)
  console.log('followCursor clicked')


  console.log('canvas width', canvas.width)
  console.log('canvas height', canvas.height)
});

let pau = document.querySelector('#btnPause')

pau.addEventListener('click', (e) => {
  e.preventDefault();
  IdAnimacion.pause()
});



// x1 144
// y1 471

//x2 240
//y2 543