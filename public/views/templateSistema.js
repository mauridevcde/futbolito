
export function headerSistema() {
    return /* html */`
    <nav aria-label="breadcrumb " style="background-color:black">
        <ol class="breadcrumb navegacionColor rounded mt-2" >
            <li class="breadcrumb-item active text-light m-auto" aria-current="page" >
                <h4 class="text-center m-2"><i class="fa fa-pencil-square"></i> SISTEMA</h4>
            </li>
        </ol> 
    </nav>`;
}

export function contenedor_Botonera() {
    return /* html */`

        <div class="container" >
          <div class="card text-center" style="margin-top: 15%;box-shadow: 5px 5px 10px rgba(0,0,0,0.2); border-radius: 15px">
          <div id="contenedorLogos">
                <img src="../public/img/pelotaFutbolitoBanner.png" width="100px">
                <h1>FUTBOLITO</h1>
                <img src="../public/img/banderPyFutbolito.png" width="100px">
            </div>
          <div id="contenedorBotonera" style="height: 300px;display: flex;justify-content: space-around;">
          <button id="btnEntrenadores" type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="entreSpan"> <i style="font-size:50px" class="fa fa-address-book" aria-hidden="true"></i>
          ENTRENADORES</span></button>

          <button id="btnEquipos" type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="EquiSpan"><i style="font-size:50px" class="fa fa-futbol-o" aria-hidden="true"></i> EQUIPOS</span></button>
         
          <button id="btnJugadores"  type="button" style="display: flex;height: 40%;width: 30%;align-content: center;align-self: center;align-items: center;"><span class="JugaSpan"> <i style="font-size:50px" class="fa fa-street-view" aria-hidden="true"></i> JUGADORES</span></button>
         
      </div>
          </div>
      </div>
    `;
}

//modal buscar/nuevo/editar equipos
export function formEquipos() {
    return /*html*/ `
      <div class="modal fade" id="modalEquipos"  tabindex="-1" role="dialog" aria-labelledby="equiposModalLabel" aria-hidden="true" data-backdrop="static">
      <div class="modal-dialog modal-xl" role="document" style="max-width:1300px;">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title  m-auto" id="equpoNuevoEditar"><i style="font-size:50px" class="fa fa-futbol-o" aria-hidden="true"></i> EQUIPOS </h5>
              </div>
              <div class="modal-body" style="font-style: normal;">
                  <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form>
                      <div class="row d-flex justify-content-center" id="containerBusquedaequipos" style="justify-content: center;margin-left: 25%;">
            
                      <div class="col-3"> 
                        <div class="form-group">
                          <input list="searchNameEquipo" type="text" class="form-control" id="searchNameEquipo" placeholder="Nombre Equipo">
                          
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-group mx-auto">
                          <input list="searchNroEquipo" type="text" class="form-control" id="searchNroEquipo" placeholder="Nro Equipo">
                         
                                    </div>
                                </div>
                      
                    <div class="col">
                      <div class="d-flex justify-content-start" id="botonesmovimiento">
                        <button type="button" id="btnBuscarEquipo" class="btn btn-success" data-toggle="tooltip"  style="height: max-content;width: fit-content;"> Buscar </button>
                        </div>
          
                      </div>
                    
                    </div>
                              <div class="row">
                                  <div class="col">
                                  <br>
                                  <br>
                                      <div class="form-group">
                                          <label for="lblNombre" style="text-transform:uppercase">NOMBRE</label>
                                          <input type="text" class="form-control" id="inpNombreFraccion" style="text-transform:uppercase">
                                          <small class="form-text text-muted">Este campo es obligatorio.</small>
                                      </div>
                                      <div class="form-group">
                                          <label for="lbldoc" style="text-transform:uppercase">NRO.</label>
                                          <input type="text" class="form-control" id="inpDesFraccion" style="text-transform:uppercase">
                                          <small class="form-text text-muted">Este campo es obligatorio.</small>
                                      </div>
  
                                      
                                  </div>
                                  </div>
                              <div class="row">
                                  <div class="col">
                                      
                                                               
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
              <div class="modal-footer">
                  <button id="btnCerrarNuevoEquipo" type="button" class="btn btn-danger">Cerrar</button>
                  <button id="btnGuardarNuevoEquipo" type="button" class="btn btn-primary">Guardar</button>
                  <button id="btnGuardarEditarEquipo" type="button" class="btn btn-primary">Editar</button>
                  
              </div>
          </div>
      </div>
  </div>`;
}

//modal buscar/nuevo/editar JUGADORES
export function formJugadores() {
    return /*html*/ `
      <div class="modal fade" id="modalJugadores"  tabindex="-1" role="dialog" aria-labelledby="jugadoresModalLabel" aria-hidden="true" data-backdrop="static">
      <div class="modal-dialog modal-xl" role="document" style="max-width:1300px;">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title  m-auto" id="jugadoresNuevoEditar"><i style="font-size:50px" class="fa fa-street-view" aria-hidden="true"></i> JUGADORES </h5>
              </div>
              <div class="modal-body" style="font-style: normal;">
                  <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form>
                      <div class="row d-flex justify-content-center" id="containerBusquedaequipos" style="justify-content: center;margin-left: 25%;">
            
                      <div class="col-3"> 
                        <div class="form-group">
                          <input list="searchClienteList" type="text" class="form-control" id="searchNombreJugador" placeholder="Nombre Jugador">
                          <datalist id="searchClienteList">
                            
                          </datalist>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-group mx-auto">
                          <input list="searchCiudadList" type="text" class="form-control" id="searchCiudad" placeholder="Nro Jugador">
                          <datalist id="searchPlanList">
                            
                          </datalist>
                                    </div>
                                </div>
                      
                    <div class="col">
                      <div class="d-flex justify-content-start" id="botonesjugadores">
                        <button type="button" id="btnBuscarJugador" class="btn btn-success  btn btnBuscar" data-toggle="tooltip"  style="height: max-content;width: fit-content;"> Buscar </button>
                        </div>
          
                      </div>
                 
                    </div>
                              <div class="row">
                                  <div class="col">
                                  <br>
                                  <br>
                                      <div class="form-group">
                                          <label for="lblNombre" style="text-transform:uppercase">NOMBRE</label>
                                          <input type="text" class="form-control" id="inpNombreJugador" style="text-transform:uppercase">
                                          <small class="form-text text-muted">Este campo es obligatorio.</small>
                                      </div>
                                      <div class="form-group">
                                          <label for="lbldoc" style="text-transform:uppercase">NRO.</label>
                                          <input type="text" class="form-control" id="inpNroJugador" style="text-transform:uppercase">
                                          <small class="form-text text-muted">Este campo es obligatorio.</small>
                                      </div>
                                      <div class="form-group">
                                      <label for="lbldoc" style="text-transform:uppercase">TITULAR</label>
                                      <input type="text" class="form-control" id="inpTitularJugador" style="text-transform:uppercase">
                                      <small class="form-text text-muted">Este campo es obligatorio.</small>
                                  </div>
                                  <div class="form-group">
                                      <label for="lblEqui" style="text-transform:uppercase;">EQUIPO:</label>
                                      <select id= "selectEquipoJugadores" class="form-select" aria-label="Default select example">
                                          <option id="selectDefault" selected>selecciona un equipo</option>
                                      </select>
      
                                      </div>
                                      <div class="form-group">
                                      <label for="lbldoc" style="text-transform:uppercase">EQUIPO NOMBRE</label>
                                      <input type="text" class="form-control" id="inputEquipoNombreJugadores" style="text-transform:uppercase">
                                      <small class="form-text text-muted">Este campo es obligatorio.</small>
                                  </div>
                              </div>
  
                                      
                                  </div>
                                  </div>
                              <div class="row">
                                  <div class="col">
                                      
                                                               
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
              <div class="modal-footer">
                  <button id="btnCerrarJugador" type="button" class="btn btn-danger">Cerrar</button>
                  <button id="btnGuardarJugador" type="button" class="btn btn-primary">Guardar</button>
                  <button id="btnGuardarEditarJugador" type="button" class="btn btn-primary">Editar</button>
                  
              </div>
          </div>
      </div>
  </div>`;
}


//modal buscar/nuevo/editar entrenadores
export function formEntrenadores() {
    return /*html*/ `
      <div class="modal fade" id="modalEntrenadores"  tabindex="-1" role="dialog" aria-labelledby="entrenadoresModalLabel" aria-hidden="true" data-backdrop="static">
      <div class="modal-dialog modal-xl" role="document" style="max-width:1300px;">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title  m-auto" id="EntrenadoresNuevoEditar"><i style="font-size:50px" class="fa fa-address-book" aria-hidden="true"></i>ENTRENADORES </h5>
              </div>
              <div class="modal-body" style="font-style: normal;">
                  <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form>
                      <div class="row d-flex justify-content-center" id="containerBusquedaequipos" style="justify-content: center;margin-left: 25%;">
            
                      <div class="col-3"> 
                        <div class="form-group">
                          <input list="searchEntrenadorName" type="text" class="form-control" id="searchEntrenadorName" placeholder="Nombre Entrenador">
                          <datalist id="searchClienteList">
                            
                          </datalist>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-group mx-auto">
                          <input list="searchEntrenadorNumber" type="text" class="form-control" id="searchEntrenadorNumber" placeholder="Equipo Entrenador">
                          <datalist id="searchPlanList">
                            
                          </datalist>
                                    </div>
                                </div>
                      
                    <div class="col">
                      <div class="d-flex justify-content-start" id="botonesEntrenadores">
                        <button type="button" id="btnBuscarEntrenador" class="btn btn-success  btn btnBuscar" data-toggle="tooltip"  style="height: max-content;width: fit-content;"> Buscar </button>
                        </div>
          
                      </div>
                   
                    </div>
                              <div class="row">
                                  <div class="col">
                                  <br>
                                  <br>
                                      <div class="form-group">
                                          <label for="lblNombre" style="text-transform:uppercase">NOMBRE</label>
                                          <input type="text" class="form-control" id="inpNombreEntrenador" style="text-transform:uppercase">
                                          <small class="form-text text-muted">Este campo es obligatorio.</small>
                                      </div>
                                      <div class="form-group">
                                      <label for="lblEqui" style="text-transform:uppercase;">EQUIPO:</label>
                                      <select id= "selectEquipoEntrenador" class="form-select" aria-label="Default select example">
                                          <option id="selectDefault" selected>selecciona un equipo</option>
                                      </select>
      
                                      </div>
                                  <div class="form-group">
                                      <label for="lbldoc" style="text-transform:uppercase">EQUIPO NOMBRE</label>
                                      <input type="text" class="form-control" id="inpNameEquiposEntrenadores" style="text-transform:uppercase">
                                      <small class="form-text text-muted">Este campo es obligatorio.</small>
                                  </div>
                                  
                                  
                              </div>
  
                                      
                                  </div>
                                  </div>
                              <div class="row">
                                  <div class="col">
                                      
                                                               
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
              <div class="modal-footer">
                  <button id="btnCerrarEntrenador" type="button" class="btn btn-danger">Cerrar</button>
                  <button id="btnGuardarNuevoEntrenador" type="button" class="btn btn-primary">Guardar</button>
                  <button id="btnGuardarEditarEntrenador" type="button" class="btn btn-primary">Editar</button>
                  
              </div>
          </div>
      </div>
  </div>`;
}
