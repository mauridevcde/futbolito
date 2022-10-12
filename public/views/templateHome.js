
export function toast(props) {
    return /* html */`
      <div aria-live="polite" aria-atomic="true" style="position: relative;" >
          <div id="myToast" class="toast" style="position: absolute; top: 0; right: 0;" data-autohide="true">
                  <div class="toast-header bg-success">
                    <img src="" class="rounded mr-2" alt="">
                    <strong class="mr-auto text-white">${props.title}</strong>
                    <small class="text-white">${props.id}</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  
                  <div class="toast-body">
                   
                  </div>
          </div>
      </div>
              ` /*  ${props.content} */;
  }
  
  
  //BARRAS DE NAVEGACION
  export function navBarPrincipal(props) { //navBar principal
  
    return /* html */`
      <div class="container" >
          <div class="card text-center" style="margin-top: 15%;box-shadow: 5px 5px 10px rgba(0,0,0,0.2); border-color: #69cd68 ; border-radius: 6px">
              <div class="card-header text-muted" style=" background-color: #8ae287; color: white">
                <i class="fas fa-home" style="color: white;"></i> <a  style="color: white;">INICIO</a>
              </div>
              <div class="card-body">
                  <div id="contenedorLogos">
                    <img src="../public/img/pelotaFutbolitoBanner.png" width="100px">
                    <h1>FUTBOLITO</h1>
                    <img src="../public/img/banderPyFutbolito.png" width="100px">
                  </div>
  
                 <div class="contenedorBotonesNavPrincipal">
                 <p class="card-text"></p>
                 
                 <a  id="sistemaBtn" class="btn btn-success  btn-lg text-white" style="background-color: #119b83; border-color: #119b83; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" >
                 <i class="fa fa-pencil-square" aria-hidden="true"></i>
                 <br>SISTEMA</a>
                 <a  id="visitasBtn" class="btn btn-info  btn-lg text-white" style="background-color:#006414; border-color:#006414; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
                 <i class="fa fa-users" aria-hidden="true"></i>
                 <br>VISITAS</a>
                 <a  id="tecnicoBtn" class="btn btn-info  btn-lg text-white" style="background-color:#006414; border-color:#006414; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
                 <i class="fa fa-plus" aria-hidden="true"></i>
                 <br>NUEVO</a>

                 <a  id="pizarraTacticaBtn" class="btn btn-info  btn-lg text-white" style="background-color:#006414; border-color:#006414; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
                 <i class="fa fa-users" aria-hidden="true"></i>
                 <br>PIZZARA TACTICA</a>
                 
                 
                 </div>
                  </div>
                      <div class="card-footer text-muted" style=" background-color: #8ae287 ; border-color: #8ae287">
                        <a  style="color: white;">BIENVENIDO</a>
                      </div>
                  </div>
          </div>
      </div>
      ` /* ${props.userEmail} */;
  }
  
  export function navbar(props) { //navBar secundario
    return /*html*/ `
      <div>
        <nav class="navbar navbar-expand-lg navbar-light navegacion-Prin" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
    
          <div class="navbar-brand" id="logoNavBarSecundario" style="margin-left: 80px;">
           
          <div id="contenedorLogos">
          <img src="../public/img/pelotaFutbolitoBanner.png" width="100px">
          <h1>FUTBOLITO</h1>
          <img src="../public/img/banderPyFutbolito.png" width="100px">
        </div>
          </div>
          
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav" style="gap: 5px;">
              <a  id="sistemaListaBtn" class="btn btn-success  btn-lg text-white" style="background-color: #119b83; border-color: #119b83; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" >
              <i class="fa fa-pencil-square" aria-hidden="true"></i>
              <br>SISTEMA</a>
              <a  id="visitasListaBtn" class="btn btn-info  btn-lg text-white" style="background-color:#006414; border-color:#006414; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
              <i class="fa fa-users" aria-hidden="true"></i>
              <br>VISITAS</a>

              <a  id="nuevoTecnico" class="btn btn-info  btn-lg text-white" style="background-color:#006414; border-color:#006414; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
              <i class="fa fa-plus" aria-hidden="true"></i>
              <br>NUEVO</a>

              <a  id="salirBtn" class="btn btn-info  btn-lg text-white" style="background-color:#003400; border-color:#003400; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"  >
              <i class="fa fa-reply" aria-hidden="true"></i>
              <br>Volver</a>
                               
              </ul>
          </div>
          <div class="ms-auto p-2 bd-highlight" >
                Usuario
          </div>
        </nav>
      </div>  
      `;
  }
  
  export function headerForm() {
    return /* html */`
      <nav aria-label="breadcrumb ">
      <ol class="breadcrumb navegacionColor rounded mt-2">
          <li class="breadcrumb-item active text-light m-auto" aria-current="page">
              <h4 class="text-center m-2"><i class="fas fa-plus"></i> Nuevo Envío</h4>
          </li>
      </ol>    
  </nav>
      `;
  }