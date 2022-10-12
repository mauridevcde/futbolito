// export async function headerCancha(props) {
//     return /* html */`
//         <div id="ContenedorHeaderTitulo">
//             <div id="contenedorLogos">
//             <img src="../public/img/pelotaFutbolitoBanner.png" width="100px">
//             <h1>PIZARRA TACTICA - FUTBOLITO</h1>
//             <img src="../public/img/banderPyFutbolito.png" width="100px">
//         </div>
//         </div>

//     `
// }

export async function jugadores_Jugada(props) {
    return /* html */ `
      <div id="ContendorJugada" style="display: flex;width: 27%;height: 80%;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;margin-left: 19px;margin-bottom: 8px;">
  
      <h1 style="display: flex;width: 100%;height: 0%;color: black;justify-content: center;font-size: 25px;">JUGADA</h1>
  
      <form style="display: flex;width: 98%;height: 64%;justify-content: center;align-items: center;">
      <div class="row">
   
      
          <div class="form-group">
              <label for="inpNombreLista" style="text-transform:uppercase;">NOMBRE:</label>
              <input type="text" class="form-control" id="inpNombreLista" style="text-transform:uppercase">
          </div>
  
  
          <div  class="row mb-3 mt-3">
          <div  class="col">
              <label for="lblDropDownHistorialJugadas" style="text-transform:uppercase;">Historial Jugadas:</label>
              <select id= "selectHistorialJugadas" class="form-select" aria-label="Default select example">
                  <option id="selectDefaultHistorialJugadas" selected></option>
              </select>
             
          </div>
  
          <div class="col">
          <label for="lblDropDownFechas" style="text-transform:uppercase;">Fechas:</label>
          <select id= "selectFechas" class="form-select" aria-label="Default select example">
              <option id="selectDefaultFechas" selected></option>
          </select>
          </div>
  
      </div>
  
    
      </div>
      </form>
      
  
      </div>
  
  
  
  
          <div id="ContenedorPanelJugadoresJugador" style="display: flex;max-width: 44%;width: 44%;height: 250px;/*! justify-content: space-evenly; */align-items: center;flex-wrap: wrap;margin-left: 1%;gap: 14px;">
  
              <div id="contenedorJugadores" style="display: flex;width: 61%;height: 80%;justify-content: center;background: #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;margin-bottom: 10px;">
                  <h1 style="display: flex;width: 100%;height: 0%;color: black;justify-content: center;font-size: 25px;">JUGADORES</h1>
                  <div style="display: flex;width: 90%;height: 68%;flex-wrap: wrap;justify-content: center;" id='Jugadores'>
                      <span id="1" class="spJugadores">1</span>
                      <span id="2" class="spJugadores">2</span>
                      <span id="3" class="spJugadores">3</span>
                      <span id="4" class="spJugadores">4</span>
                      <span id="5" class="spJugadores">5</span>
  
                      <div id="contenedorCantJug" style="display: flex;height: 102px;width: 100%;justify-content: space-evenly;align-items: baseline;margin-top: 16px;">
             
                      <div id="cantJugadoresEnCancha">
                       <label for="selectCantJugadores" style="text-transform:uppercase;">Cant. Jugadores:</label>
                       <select id= "selectCantJugadores" class="form-select" aria-label="Default select example">
                           <option value="1" selected>1</option>
                           <option value="2" >2</option>
                           <option value="3" >3</option>
                           <option value="4" >4</option>
                           <option value="5" >5</option>
                           </select>
                      </div>
                      <div id="cantJugadas">
                       <label for="selectCantJugadas" style="text-transform:uppercase;">Cant. Jugadas:</label>
                       <select id= "selectCantJugadas" class="form-select" aria-label="Default select example">
                       <option value="1" selected>1</option>
                       <option value="2" >2</option>
                       <option value="3" >3</option>
                       <option value="4" >4</option>
                       <option value="5" >5</option>
                       </select>
                      </div>
                   </div>
               </div>
               </div>
                  </div>
                  
              </div>
  
            
                  <div id="contenedorControlReproductor" style="display: flex;width: 27%;height: 120px;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;margin-left: 18px;margin-bottom: 33px;">
              <h1 style="display: flex;width: 100%;height: 3%;color: black;justify-content: center;font-size: 25px;">Control de Reproductor</h1>
              <div style="display: flex;width: 90%;height: 30%;flex-wrap: wrap;justify-content: space-around;" id='controlesReproductor'>
                  
              <div id="grabar" class="botoneraReproductor">
              <img src="./img/rec.png" width="40px" height="40px" id="imgBtnGrabar1">
                  </div>   
  
                  <div id="play" class="botoneraReproductor">
                      <img src="./img/botonPlay.png" width="40px" height="40px">
                 </div>
  
                 <div id="pause" class="botoneraReproductor"> 
                 <img src="./img/botonPausa.png" width="40px" height="40px">
                 </div>
  
                 <div id="reiniciar" class="botoneraReproductor">
                 <img src="./img/botonReiniciar.png" width="40px" height="40px">
                  
                 </div>
  
  
              </div>
          </div>
  
          <div id="contenedorComandos" style="display: flex;width: 27%;height: 150px;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;margin-left: 18px;">
              <h1 style="display: flex;width: 100%;height: 5%;color: black;justify-content: center;font-size: 25px;">Comandos</h1>
              <div style="display: flex;width: 90%;height: 52%;flex-wrap: wrap;justify-content: space-around;"id='controlesComandos'>
               
              <button id="btnEquipos" type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="EquiSpan2"> MODIFICAR</span></button>
              <button id="btnEquipos" type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="EquiSpan2"> GUARDAR</span></button>
              <button id="btnEquipos" type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="EquiSpan2">ELIMINAR</span></button>
  
              </div>
  
            
          </div>
  
          </div>
      `;
  }
  
  export async function cancha(props) {
    return /* html */ `
    <div id="contenedor-animation" style="width:70%;height: 789px;display:flex;justify-content: center;align-content: center;align-items: center;margin-left: 29%;margin-top: -768px;">
    <div  style="background-color: #ccc;  width: 1300px; height:766px;" >
    <div class="pelota0">1</div>
    <div class="pelota1">2</div>
    <div class="pelota2">3</div>
    <div class="pelota3">4</div>
    <div class="pelota4">5</div>
    </div>
    </div>
    <div style="width:70%;height: 0px;display:flex;justify-content: center;align-content: center;align-items: center;margin-left: 29%;margin-top: -395px;" id="ContendorCancha">
    
    <canvas width="1300px" height="766px" style="background-image: url('./img/cancha.png');" id="cancha">
       
    </canvas>
    
  </div>
    `;
  }
  
  export async function headerBotonera() {
    return /* html */ `
         
      `;
  }
  