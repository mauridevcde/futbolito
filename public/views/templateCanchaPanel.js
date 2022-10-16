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
      <div id="ContendorJugada" style="display: flex;width: 98%;height: 80%;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;margin-left: 25px;margin-bottom: 8px;">
  
      <h1 style="display: flex;width: 100%;height: 0%;color: black;justify-content: center;font-size: 25px;">JUGADA</h1>
  
      <form style="display: flex;width: 98%;height: 64%;justify-content: space-evenly;align-items: center;">
      <div class="row">
   
      
          <div class="form-group">
             <div id="contentFormJug" style="
             display: flex;
             width: 80%;
         ">
             
              
             <input list="selectHistorialJugadasList" type="text" class="form-control" id="selectHistorialJugadas" placeholder="Buscar Jugada">
             <datalist id="selectHistorialJugadasList">
                 
             </datalist>
             <a id="seleccionarJugada" style="
             display: flex;
             justify-content: center;
             align-self: center;
             align-items: center;
             gap: 11px;
             box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
             cursor: pointer;
             border-radius: 7px;
             width: 29%;
             height: 40px;
             margin-left: 12px;
             font-family: fantasy;
         " >Seleccionar<i class="fa fa-check"></i></a>
                </div>
             </select>
             
          </div>
  
  
          <div  class="row mb-3 mt-3">
          <div  class="col">
              <label for="lblDropDownHistorialJugadas">Jugada Actual:</label>
             
              <input type="text" class="form-control" id="inpNombreLista" disabled >
          </div>
   
          <a id="buscarJugadaAUtilizar" style="
          display: flex;
          justify-content: center;
          align-self: center;
          align-items: center;
          gap: 11px;
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          cursor: pointer;
          border-radius: 7px;
          width: 22%;
          height: 40px;
          font-family: fantasy;
          margin-top: 20px;
      ">Montar Jugada<i class="fa fa-check"></i></a>
          
          <div class="col">
         
          </div>
  
      </div>
  
    
      </div>
      <div id="contenedorControlReproductor" style="display: flex;width: 31%;height: 90px;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;/* margin-left: 18px; *//* margin-bottom: 33px; */">
      <h1 style="display: flex;width: 100%;height: 3%;color: black;justify-content: center;font-size: 25px;">Control de Reproductor</h1>
     

         <div id="soloBtns" style="
         display: flex;
         width: 54%;
         justify-content: space-around;
         align-items: center;
     ">
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
      </form>
      
  
      </div>
  
  
  
  
         
  
            
                  
  
  
              </div>
          </div>
  
          
  
          </div>
      `;
}

export async function cancha(props) {
    return /* html */ `
    <div id="contenedor-animation" style="width: 100%;height: 886px;display:flex;justify-content: center;/* align-content: center; *//* align-items: center; *//* margin-left: 29%; *//* margin-top: 3px; */">
    <div  style="background-color: #ccc;  width: 1300px; height:766px;" >
    <div class="pelota0">1</div>
    <div class="pelota1">2</div>
    <div class="pelota2">3</div>
    <div class="pelota3">4</div>
    <div class="pelota4">5</div>
    </div>
    </div>
    <div style="width: 42%;height: 0px;display:flex;justify-content: center;align-content: center;align-items: center;margin-left: 29%;margin-top: -501px;" id="ContendorCancha">
    
    <canvas width="1300px" height="766px" style="background-image: url('./img/cancha.png');" id="cancha">
       
    </canvas>
    
  </div>
    `;
}

export async function headerBotonera() {
    return /* html */ `
         
    
    <div id="contenedorFooter" style="display: flex;width: 100%;height: 80px;justify-content: center;background:  #D5E8D4;flex-wrap: wrap;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;/* margin-left: 19px; *//* margin-bottom: 8px; */margin-top: 401px;align-content: center;">

            <button id="eliminarJugada">Eliminar</button>
    </div>

      `;
}
