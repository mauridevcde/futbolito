const mongoose = require('mongoose');

//3.2.- Jugadores: id = Num - Nombre = String(120) - Nro = Num - Titular = Boolean - Equipo id = Num - Equipo nombre = String - Estado = Boolean.-

const Jugador = new mongoose.Schema({

    id: { type: Number },
    nombre: { type: String },
    nro: { type: Number },
    titular: { type: Boolean },
    equipo_id: { type: Number },
    equipo_nombre: { type: String },
    estado: { type: Boolean }
});

module.exports = mongoose.model('Jugador', Jugador);