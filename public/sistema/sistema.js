import { render } from '../others/renderizado.js';
import { addNavBarFunctions } from '../others/utils.js';
import { headerSistema, contenedor_Botonera, formEquipos, formJugadores, formEntrenadores } from '../views/templateSistema.js'
import { api_get_AllEquipos, api_post_Equipos, api_put_Equipo } from '../apis/apiEquipos.js'
import { api_get_AllEntrenador, api_post_Entrenador, api_put_Entrenador } from '../apis/apiEntrenador.js'
import { api_get_AllJugadores, api_post_Jugadores, api_put_Jugadores } from '../apis/apiJugadores.js'

import { navbar } from '../views/templateHome.js'


export function sistema() {
    inicioSistema()
}

async function inicioSistema() {

    let view = {};
    view.navbar = navbar();
    view.header = headerSistema(); //header con icono
    view.conenedorBotonera = contenedor_Botonera()
    view.formEquipos = formEquipos();
    view.formJugadores = formJugadores();
    view.formEntrenadores = formEntrenadores();
    render(view, true);
    addNavBarFunctions();
    FORMS()
}

async function FORMS() {

    modalEquipos();
    modalJugadores();
    await modalEntrenadores();

}

function modalEquipos() {
    //abri modal
    let modalEquipos = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalEquipos'))

    //botones del modal

    let btnEquipos = document.getElementById('btnEquipos');
    btnEquipos.addEventListener('click', function () {
        let btnNuevoEquipo = document.getElementById('btnGuardarNuevoEquipo');
        let btnEditarEquipo = document.getElementById('btnGuardarEditarEquipo');
        btnNuevoEquipo.style.display = 'none';
        btnEditarEquipo.style.display = 'none';
        modalEquipos.show();
    });

    let btnCerrarModal = document.getElementById('btnCerrarNuevoEquipo');
    btnCerrarModal.addEventListener('click', () => {
        limpiarInputs();
        modalEquipos.hide()
    })

    function limpiarInputs() {
        document.getElementById('inpNombreFraccion').value = '';
        document.getElementById('inpDesFraccion').value = '';
        document.getElementById('searchNameEquipo').value = '';
        document.getElementById('searchNroEquipo').value = '';
    }

    //una vez el modal abierto, buscar el equipo
    let btnBuscarEquipo = document.getElementById('btnBuscarEquipo');
    let idEquipo;
    btnBuscarEquipo.addEventListener('click', async function () {

        let btnNuevoEquipo = document.getElementById('btnGuardarNuevoEquipo');
        let btnEditarEquipo = document.getElementById('btnGuardarEditarEquipo');

        let allEquipos = await getAllEquipos()


        //console.log("🚀 ~ file: sistema.js ~ line 57 ~ allEquipos", allEquipos)
        let searchNameEquipo = document.getElementById('searchNameEquipo').value.trim().toUpperCase();
        let searchNroEquipo = document.getElementById('searchNroEquipo').value.trim().toUpperCase();

        if (searchNameEquipo != '') {
            let equipoFiltrado1 = allEquipos.filter(equipo => equipo.nombre.includes(searchNameEquipo))

            console.log("🚀 ~ file: sistema.js ~ line 63 ~ equipoFiltrado1", equipoFiltrado1)

            if (equipoFiltrado1.length > 0) {
                idEquipo = equipoFiltrado1[0].id;
                document.getElementById('inpNombreFraccion').value = equipoFiltrado1[0].nombre
                document.getElementById('inpDesFraccion').value = equipoFiltrado1[0].nro
                btnEditarEquipo.style.display = 'grid';
                btnNuevoEquipo.style.display = 'none';
            } else {

                document.getElementById('inpNombreFraccion').value = ""
                document.getElementById('inpDesFraccion').value = ""

                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Equipo!'
                }).then(() => {

                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })


            }



        } else {
            let equipoFiltrado2 = allEquipos.filter(equipo => equipo.nro == searchNroEquipo)
            let btnNuevoEquipo = document.getElementById('btnGuardarNuevoEquipo');
            let btnEditarEquipo = document.getElementById('btnGuardarEditarEquipo');
            console.log("🚀 ~ file: sistema.js ~ line 65 ~ equipoFiltrado2", equipoFiltrado2)
            if (equipoFiltrado2.length > 0) {
                idEquipo = equipoFiltrado2[0].id;
                document.getElementById('inpNombreFraccion').value = equipoFiltrado2[0].nombre
                document.getElementById('inpDesFraccion').value = equipoFiltrado2[0].nro
                btnNuevoEquipo.style.display = 'none';
                btnEditarEquipo.style.display = 'grid';
            } else {
                document.getElementById('inpNombreFraccion').value = ""
                document.getElementById('inpDesFraccion').value = ""
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Equipo!'
                }).then(() => {
                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })
            }
        }

    })

    let btnGuardarNuevoEquipo = document.getElementById('btnGuardarNuevoEquipo');
    btnGuardarNuevoEquipo.addEventListener('click', async function () {

        let nombre = document.getElementById('inpNombreFraccion').value.trim().toUpperCase();
        let nro = document.getElementById('inpDesFraccion').value.trim().toUpperCase();

        let nuevoEquipo = {
            nombre: nombre,
            nro: nro
        }

        if (validaObject(nuevoEquipo)) {
            console.log("true");

            post_Equipo(nuevoEquipo).then((res) => {
                console.log("🚀 ~ file: sistema.js ~ line 150 ~ res", res);
                if (res.status == "Equipo creado") {
                    Swal.fire({
                        icon: 'success',
                        title: "Nuevo Equipo Agregado!",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#6F8EAD",
                    });
                    limpiarInputs();
                    modalEquipos.hide();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: "Error al agregar equipo!",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#6F8EAD",
                    });

                }

            })

        }
    })

    let btnEditarEquipo = document.getElementById('btnGuardarEditarEquipo');
    btnEditarEquipo.addEventListener('click', async function () {

        let nombre = document.getElementById('inpNombreFraccion').value.trim().toUpperCase();
        let nro = document.getElementById('inpDesFraccion').value.trim().toUpperCase();

        let nuevoEquipo = {
            id: idEquipo,
            nombre: nombre,
            nro: nro
        }
       // console.log("🚀 ~ file: sistema.js ~ line 166 ~ nuevoEquipo", nuevoEquipo);
        if (validaObject(nuevoEquipo)) {
            updateEquipo(nuevoEquipo).then((res) => {
         //       console.log("🚀 ~ file: sistema.js ~ line 170 ~ res", res);
                if (res.estado == true) {
                    Swal.fire({
                        icon: 'success',
                        title: "Equipo Modificado con Exito!",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#6F8EAD",
                    });
                    limpiarInputs();
                    modalEquipos.hide();
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: "Algún Campo Vacio!",
                confirmButtonText: "OK",
                confirmButtonColor: "#6F8EAD",
            });
            console.log("false");
        };

    })
}

async function modalEntrenadores() {

    let modalEntrenadores = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalEntrenadores'))

    let btnEntrenadores = document.getElementById('btnEntrenadores');

    btnEntrenadores.addEventListener('click', async function () {
        let btnNuevoEquipo = document.getElementById('btnGuardarNuevoEntrenador');
        let btnEditarEquipo = document.getElementById('btnGuardarEditarEntrenador');

        btnEditarEquipo.style.display = 'none';
        btnNuevoEquipo.style.display = 'none';

        // let allEquiposEntrenador2 = await getAllEquipos()
        // let optionEquipoEntrenador2 = document.getElementById('selectEquipoEntrenador');
        // let equipoEntrenadorRender2 = ``;
        // allEquiposEntrenador2.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
        //     console.log('console.log', element);
        //     console.log('equipoId', element.id);
        //     console.log('idEntrenador', idEntrenador)
        //     console.log('entrenadorFiltrado1', allEquiposEntrenador)

        //     equipoEntrenadorRender2 += `<option value="${element.equipo_id}">${element.nombre}</option>`


        // });
        // optionEquipoEntrenador2.innerHTML = equipoEntrenadorRender2
        // equipoEntrenadorRender2 = ``;

        modalEntrenadores.show();

    });

    let btnCerrarModal = document.getElementById('btnCerrarEntrenador');
    btnCerrarModal.addEventListener('click', () => {
        limpiarInputs();
        modalEntrenadores.hide()
    })

    function limpiarInputs() {
        document.getElementById('inpNombreEntrenador').value = '';
        document.getElementById('selectEquipoEntrenador').value = '';
        document.getElementById('inpNameEquiposEntrenadores').value = '';
    }

    //una vez el modal abierto, buscar el entrenador
    let idEntrenador;
    let btnBuscarEntrenador = document.getElementById('btnBuscarEntrenador');
    let idEntrenadorAEditar;
    //busca el entrenador

    btnBuscarEntrenador.addEventListener('click', async function () {


        let allEntrenadores = await getAllEntrenador()

        let btnNuevoEquipo = document.getElementById('btnGuardarNuevoEntrenador');
        let btnEditarEquipo = document.getElementById('btnGuardarEditarEntrenador');

        let searchNameEntrenador = document.getElementById('searchEntrenadorName').value.trim().toUpperCase();
        let searchNroEquipoEntrenador = document.getElementById('searchEntrenadorNumber').value.trim().toUpperCase();

        if (searchNameEntrenador != '') {

            let entrenadorFiltrado1 = allEntrenadores.filter(entrenador => entrenador.nombre.includes(searchNameEntrenador))

            console.log('entrenadorFiltrado1', entrenadorFiltrado1)
            if (entrenadorFiltrado1.length > 0) {

                idEntrenador = entrenadorFiltrado1[0].equipo_id;
                idEntrenadorAEditar = entrenadorFiltrado1[0].id;

                console.log('id entrenador filtrado', idEntrenador)
                document.getElementById('inpNombreEntrenador').value = entrenadorFiltrado1[0].nombre

                document.getElementById('inpNameEquiposEntrenadores').value = entrenadorFiltrado1[0].equipo_nombre



                let allEquiposEntrenador = await getAllEquipos()

                let optionEquipoEntrenadors = document.getElementById('selectEquipoEntrenador');

                let equipoEntrenadorRenders = ``;

                allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                    if (element.id == idEntrenador) {
                        equipoEntrenadorRenders += `<option value="${element.id}" selected>${element.nombre}</option>`
                    } else {
                        equipoEntrenadorRenders += `<option value="${element.id}" >${element.nombre}</option>`
                    }

                });

                optionEquipoEntrenadors.innerHTML = equipoEntrenadorRenders
                equipoEntrenadorRenders = ``;

                btnEditarEquipo.style.display = 'grid';
                btnNuevoEquipo.style.display = 'none';

            } else {

                document.getElementById('inpNombreEntrenador').value = ""
                document.getElementById('inpNameEquiposEntrenadores').value = ""

                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Entrenador!'
                }).then(async () => {
                    let allEquiposEntrenador = await getAllEquipos()

                    let optionEquipoEntrenadors = document.getElementById('selectEquipoEntrenador');

                    let equipoEntrenadorRenders = ``;

                    allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                        equipoEntrenadorRenders += `<option value="${element.id}" selected>${element.nombre}</option>`

                    });

                    optionEquipoEntrenadors.innerHTML = equipoEntrenadorRenders
                    equipoEntrenadorRenders = ``;
                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })


            }


        } else {
            let entrenadorFiltrado2 = allEntrenadores.filter(entrenador => entrenador.equipo_nombre.includes(searchNroEquipoEntrenador))

//            console.log("🚀 ~ file: sistema.js ~ line 63 ~ equipoFiltrado1", entrenadorFiltrado2)

            if (entrenadorFiltrado2.length > 0) {

                idEntrenador = entrenadorFiltrado2[0].equipo_id;

                document.getElementById('inpNombreEntrenador').value = entrenadorFiltrado2[0].nombre


                allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                    console.log('console.log', element);
                    console.log('equipoId', element.id);
                    console.log('idEntrenador', idEntrenador)
                    console.log('entrenadorFiltrado1', entrenadorFiltrado2)

                    if (element.id == idEntrenador) {
                        equipoEntrenadorRender += `<option value="${element.equipo_id}" selected>${element.nombre}</option>`
                    } else {
                        equipoEntrenadorRender += `<option value="${element.equipo_id}" >${element.nombre}</option>`
                    }


                });

                optionEquipoEntrenador.innerHTML = equipoEntrenadorRender
                equipoEntrenadorRender = ``;

                document.getElementById('inpNameEquipos').value = entrenadorFiltrado2[0].equipo_nombre

                btnEditarEquipo.style.display = 'grid';
                btnNuevoEquipo.style.display = 'none';

            } else {

                document.getElementById('inpNombreEntrenador').value = ""
                document.getElementById('inpNameEquipos').value = ""
                equipoEntrenadorRender = ``;
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Entrenador!'
                }).then(() => {

                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })


            }
        }

    })

    let btnGuardarNuevoEntrenador = document.getElementById('btnGuardarNuevoEntrenador');
    btnGuardarNuevoEntrenador.addEventListener('click', async function () {

        let optionEquipoEntrenador2 = document.getElementById('selectEquipoEntrenador').value;


        let nombre = document.getElementById('inpNombreEntrenador').value.trim().toUpperCase();

        let equipoNombre = document.getElementById('inpNameEquiposEntrenadores').value.trim().toUpperCase();


        if (optionEquipoEntrenador2 != null || optionEquipoEntrenador2 != undefined || optionEquipoEntrenador2 != "") {

            let nuevoEntrenador = {

                nombre: nombre,
                equipo_id: optionEquipoEntrenador2,
                equipo_nombre: equipoNombre,
                estado: true,
            }

            if (validaObject(nuevoEntrenador)) {
//                console.log("🚀 ~ file: sistema.js ~ line 388 ~ nuevoEntrenador", nuevoEntrenador)
  //              console.log("true");

                post_Entrenador(nuevoEntrenador).then((res) => {
    //                console.log("🚀 ~ file: sistema.js ~ line 150 ~ res", res);
                    if (res.status == "Entrenador creado") {
                        Swal.fire({
                            icon: 'success',
                            title: "Nuevo Entrenador Agregado!",
                            confirmButtonText: "OK",
                            confirmButtonColor: "#6F8EAD",
                        });
                        limpiarInputs();
                        modalEntrenadores.hide();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: "Error al agregar Entrenador!",
                            confirmButtonText: "OK",
                            confirmButtonColor: "#6F8EAD",
                        });

                    }

                })

            } else {
   //             console.log("false  ");
 //               console.log("🚀 ~ file: sistema.js ~ line 388 ~ nuevoEntrenador", nuevoEntrenador)
            }
        } else {
            swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Algo salio mal!',
                footer: 'Intentalo nuevamente pq algo es undefined'
            })
        }

    })

    let btnEditarEntrenador = document.getElementById('btnGuardarEditarEntrenador');
    btnEditarEntrenador.addEventListener('click', async function () {

        let nombre = document.getElementById('inpNombreEntrenador').value.trim().toUpperCase();
        let nro = document.getElementById('inpNameEquiposEntrenadores').value.trim().toUpperCase();
        let idEquipo = document.getElementById('selectEquipoEntrenador').value

        let nuevoEquipo = {
            id: idEntrenadorAEditar,
            nombre: nombre,
            equipo_id: idEquipo,
            equipo_nombre: nro,
        }
     //   console.log("🚀 ~ file: sistema.js ~ line 166 ~ nuevoEquipo", nuevoEquipo);
        if (validaObject(nuevoEquipo)) {
            updateEntrenador(nuevoEquipo).then((res) => {
       //         console.log("🚀 ~ file: sistema.js ~ line 170 ~ res", res);
                if (res.status == "Entrenador Actualizado") {
                    Swal.fire({
                        icon: 'success',
                        title: "Entrenador Modificado con Exito!",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#6F8EAD",
                    });
                    limpiarInputs();
                    modalEntrenadores.hide();
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: "Algún Campo Vacio!",
                confirmButtonText: "OK",
                confirmButtonColor: "#6F8EAD",
            });
            console.log("false");
        };

    })



}





function modalJugadores() {

    let btnJugadores = document.getElementById('btnJugadores');
    btnJugadores.addEventListener('click', function () {

        $('#modalJugadores').modal('show');
    });

    //buscar jugador

    let btnBuscar_Jugador = document.getElementById('btnBuscarJugador')

    btnBuscar_Jugador.addEventListener('click', async function () {

        let allEntrenadores = await getAllJugadores()

        let btnNuevoJugador = document.getElementById('btnGuardarJugador');
        let btnEditarJugador = document.getElementById('btnGuardarEditarJugador');

        let searchNameEntrenador = document.getElementById('searchEntrenadorName').value.trim().toUpperCase();
        let searchNroEquipoEntrenador = document.getElementById('searchEntrenadorNumber').value.trim().toUpperCase();

        if (searchNameEntrenador != '') {

            let entrenadorFiltrado1 = allEntrenadores.filter(entrenador => entrenador.nombre.includes(searchNameEntrenador))

            console.log('entrenadorFiltrado1', entrenadorFiltrado1)
            if (entrenadorFiltrado1.length > 0) {

                idEntrenador = entrenadorFiltrado1[0].equipo_id;
                idEntrenadorAEditar = entrenadorFiltrado1[0].id;

                console.log('id entrenador filtrado', idEntrenador)
                document.getElementById('inpNombreEntrenador').value = entrenadorFiltrado1[0].nombre

                document.getElementById('inpNameEquiposEntrenadores').value = entrenadorFiltrado1[0].equipo_nombre



                let allEquiposEntrenador = await getAllEquipos()

                let optionEquipoEntrenadors = document.getElementById('selectEquipoEntrenador');

                let equipoEntrenadorRenders = ``;

                allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                    if (element.id == idEntrenador) {
                        equipoEntrenadorRenders += `<option value="${element.id}" selected>${element.nombre}</option>`
                    } else {
                        equipoEntrenadorRenders += `<option value="${element.id}" >${element.nombre}</option>`
                    }

                });

                optionEquipoEntrenadors.innerHTML = equipoEntrenadorRenders
                equipoEntrenadorRenders = ``;



                btnEditarEquipo.style.display = 'grid';
                btnNuevoEquipo.style.display = 'none';

            } else {

                document.getElementById('inpNombreEntrenador').value = ""
                document.getElementById('inpNameEquiposEntrenadores').value = ""

                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Entrenador!'
                }).then(async () => {
                    let allEquiposEntrenador = await getAllEquipos()

                    let optionEquipoEntrenadors = document.getElementById('selectEquipoEntrenador');

                    let equipoEntrenadorRenders = ``;

                    allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                        equipoEntrenadorRenders += `<option value="${element.id}" selected>${element.nombre}</option>`

                    });

                    optionEquipoEntrenadors.innerHTML = equipoEntrenadorRenders
                    equipoEntrenadorRenders = ``;
                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })


            }


        } else {
            let entrenadorFiltrado2 = allEntrenadores.filter(entrenador => entrenador.equipo_nombre.includes(searchNroEquipoEntrenador))


            console.log("🚀 ~ file: sistema.js ~ line 63 ~ equipoFiltrado1", entrenadorFiltrado2)

            if (entrenadorFiltrado2.length > 0) {

                idEntrenador = entrenadorFiltrado2[0].equipo_id;

                document.getElementById('inpNombreEntrenador').value = entrenadorFiltrado2[0].nombre


                allEquiposEntrenador.forEach(element => { //llama a la api provincias pero usa su objeto provinciaPy para mostrar
                    console.log('console.log', element);
                    console.log('equipoId', element.id);
                    console.log('idEntrenador', idEntrenador)
                    console.log('entrenadorFiltrado1', entrenadorFiltrado2)

                    if (element.id == idEntrenador) {
                        equipoEntrenadorRender += `<option value="${element.equipo_id}" selected>${element.nombre}</option>`
                    } else {
                        equipoEntrenadorRender += `<option value="${element.equipo_id}" >${element.nombre}</option>`
                    }


                });

                optionEquipoEntrenador.innerHTML = equipoEntrenadorRender
                equipoEntrenadorRender = ``;

                document.getElementById('inpNameEquipos').value = entrenadorFiltrado2[0].equipo_nombre



                btnEditarEquipo.style.display = 'grid';
                btnNuevoEquipo.style.display = 'none';

            } else {

                document.getElementById('inpNombreEntrenador').value = ""
                document.getElementById('inpNameEquipos').value = ""
                equipoEntrenadorRender = ``;
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No existe el Entrenador!'
                }).then(() => {

                    btnNuevoEquipo.style.display = 'grid';
                    btnEditarEquipo.style.display = 'none';
                })


            }
        }



    })

}
//APIs
async function getAllEquipos() {
    const response = await api_get_AllEquipos();
    return response;
}

async function post_Equipo(datos) {
    let equipo = await api_post_Equipos(datos);
    return equipo;
}

async function updateEquipo(datos) {
    let EquipoUpdate = await api_put_Equipo(datos)

    return EquipoUpdate

}

async function updateEntrenador(datos) {
    let EquipoUpdate = await api_put_Entrenador(datos)

    return EquipoUpdate

}

async function getAllEntrenador() {
    const response = await api_get_AllEntrenador();
    return response;
}

async function post_Entrenador(datos) {
    let entrenador = await api_post_Entrenador(datos);
    return entrenador;
}


async function getAllJugadores() {
    const response = await api_get_AllJugadores();
    return response;
}

async function post_Jugadores(datos) {
    let equipo = await api_post_Jugadores(datos);
    return equipo;
}


async function updateJugadores(datos) {
    let EquipoUpdate = await api_put_Jugadores(datos)

    return EquipoUpdate

}


//!Validaciones de campos vacios
function validaObject(datos) {
    let conta = 0;
    for (const property in datos) {
        if (datos[property] == '' || datos[property] == null || datos[property] == undefined) {
            conta++;
        }
    }
    if (conta > 0) { return false; } else { return true; }
}