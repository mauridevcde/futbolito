const express = require('express');
const route = express.Router();
const controllerEquipo = require('../controller/equipo');
const controllerEntrenador = require('../controller/entrenador');
const controllerJugador = require('../controller/jugador');

//Route of equipo
route.post('/futbolito/equiposPost/', controllerEquipo.insert_equipo);
route.get('/futbolito/equiposGetAll/', controllerEquipo.read_all_equipos);
route.put('/futbolito/equiposUpdate', controllerEquipo.update_equipo);
route.put('/futbolito/equiposDelete', controllerEquipo.delete_equipo);

//Route of entrenador
route.post('/futbolito/entrenadorPost', controllerEntrenador.insert_entrenador)
route.get('/futbolito/entrenadoresGetAll/', controllerEntrenador.read_all_entrenadores);
route.put('/futbolito/entrenadorUpdate', controllerEntrenador.update_entrenador);
route.put('/futbolito/entrenadorDelete', controllerEntrenador.delete_entrenador);

//Route of jugador
route.post('/futbolito/jugadorPost', controllerJugador.insert_jugador)
route.get('/futbolito/jugadoresGetAll/', controllerJugador.read_all_jugadores);
route.put('/futbolito/jugadorUpdate', controllerJugador.update_jugador);
route.put('/futbolito/jugadorDelete', controllerJugador.delete_jugador);

module.exports = route;