import { render } from '../others/renderizado.js';
import { addNavBarFunctions } from '../others/utils.js';
import { headerVisitas } from '../views/templateVisitas.js'
import { navbar } from '../views/templateHome.js'
import { cancha } from '../views/templateCanchaPanel.js'

export function Visitas() {
    inicioVisitas()
}

async function inicioVisitas() {

    let view = {};
    view.navbar = navbar();
    view.header = await headerVisitas(); //header con icono
    view.cancha = await cancha();


    render(view, true);
    addNavBarFunctions();
    coordenadasCancha();

}

function coordenadasCancha() {
    let campo = document.getElementById('cancha');
    let position = campo.getBoundingClientRect();
    let contadorClick = 0;
    let x1 = 0;
    let y1 = 0;
    let coordenadas = [];

    campo.addEventListener('click', (event) => {
        let laX = event.clientX - position.left;
        let laY = event.clientY - position.top;

        if (contadorClick <= 0) {
            contadorClick = 1;
            console.log('en 1', contadorClick);

            x1 = laX;
            y1 = laY;
            console.log('log coord 1', x1 + 'y' + y1);
            coordenadas.push({ x1, y1 })

        } else {

            contadorClick = contadorClick + 1;
            console.log('contador + 1', contadorClick);

            if (contadorClick < 3) {

                console.log('log coord Mayor', x1 + 'y' + y1);
                coordenadas.push({ laX, laY })

                dibujar(coordenadas);

            } else {

                contadorClick = 0;
                x1, y1 = 0;
                console.log('supero los clicks');
                coordenadas = [];


                /*                 let linea = `<svg height="1000" width="1669.5">
                
                                            <line x1=${x1} y1=${y1} x2=${laX} y2=${laY} style="stroke:rgb(255,0,0);stroke-width:2" />
                                          </svg>`;
                
                 */                //Casi funciona
                //Aqui se debe crear un element de linea y agregar a campo

            }

        }
    })}

        /*         function drawLine() {
                    var c = document.getElementById("cancha");
                    var ctx = c.getContext("2d");
                    ctx.moveTo(0, 0);
                    ctx.lineTo(200, 100);
                    ctx.stroke();
                }
         */

/*
                function dibujar(datos) {

            console.log('datos recib', datos);

            let x, y, x1, y1;

            x = datos[0].x1;
            y = datos[0].y1;
            x1 = datos[0].laX;
            y1 = datos[0].laY;


            var c = document.getElementById("cancha");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.strokeStyle="#000";
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.stroke();
        }


        //drawLine();
        console.log('coordenadas', coordenadas);
        console.log('position', position);
        //console.log('log coordinates', laX + 'y' + laY);
    })

}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };



/*
 var canvas;
var context;
var posini;
var pointsClick = [];
window.onload = function(){
 canvas = document.getElementById("myCanvas");
 context = canvas.getContext("2d");
 canvas.addEventListener('click', DrawClick, false);
 //canvas.addEventListener('mousemove', draw, false);
  drawGrids();
};
function drawGrids() {
    for(var i=0; i < 300 ; i=i+20)
    {
        context.beginPath();
        context.strokeStyle="#999";
        context.moveTo(i, 0);
        context.lineTo(i, 300);  
        context.stroke();      
      
        context.beginPath();
        context.strokeStyle="#999";
        context.moveTo(0, i);
        context.lineTo(300, i);  
        context.stroke();
    }
    
}

function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = "#999";
    context.fillRect(posx-1, posy-1, 1, 1);
}
function DrawClick (e)
{     
   var pos = getMousePos(canvas, e);   
   if(posini)
   {    
     context.beginPath();
     context.strokeStyle="#000";
     context.moveTo(posini.x, posini.y);
     context.lineTo(pos.x, pos.y); 
     context.stroke();    
     var lessx = (posini.x  - pos.x);
     var lessy = (posini.y  - pos.y);
     var divx = Math.abs(posini.x  - pos.x) / 5;
     var divy = Math.abs(posini.y  - pos.y) / 5;
     console.log("lessx " + lessx)
     console.log("lessy " + lessy)
     for (var i = 0; i < 5 ; i = i + 1) {
       if (lessx < 0 && lessy < 0)
       {
           context.fillRect(posini.x  + (divx * i), posini.y + (divy * i) , 5, 5);          
       }else if (lessx < 0 && lessy > 0)
       {
           context.fillRect(posini.x  + (divx * i), posini.y - (divy * i) , 5, 5);           
       }
       else if (lessx > 0 && lessy > 0)
       {
           context.fillRect(posini.x  - (divx * i), posini.y - (divy * i) , 5, 5);      
       }
        else if (lessx > 0 && lessy < 0)
       {
           context.fillRect(posini.x  - (divx * i), posini.y + (divy * i) , 5, 5);        
       }else
       {        
         if (lessx == 0)
         {
            if(lessy > 0)
            {
               context.fillRect(posini.x  , posini.y - (divy * i), 5, 5);
            }else
            {
               context.fillRect(posini.x  , posini.y + (divy * i), 5, 5);
            }
         }else
         {
             if(lessx > 0)
            {
               context.fillRect(posini.x- (divx * i)  , posini.y , 5, 5);
            }else
            {
               context.fillRect(posini.x+ (divx * i) , posini.y , 5, 5);
            }
         }         
       }
     }    
   }
  posini = pos;
  pointsClick.push(posini);  
}

function back(){  
  context.clearRect(0, 0, canvas.width, canvas.height); 
  drawGrids();
  posini = null;
  pointsClick.splice(pointsClick.length - 1, 1);
  if(pointsClick.length ==1)
  {
      pointsClick = [];
  }
  if(pointsClick && pointsClick.length > 0)
  {       
     for(var i= 0; i < pointsClick.length; i++ )
     {       
       context.beginPath();
       context.strokeStyle="#000";
       context.moveTo(pointsClick[i].x, pointsClick[i].y);
       if(i+1 <= pointsClick.length && pointsClick[i + 1])
       {
          context.lineTo(pointsClick[i + 1].x, pointsClick[i + 1].y);  
          context.stroke();     
       }       
     }
  } else
  {
      posini = null;
      pointsClick = [];
  }
}
function reset(){
   posini = null;
}

function clearCanvas() {
   posini = null;
   pointsClick = [];
   context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrids();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
*/