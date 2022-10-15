const mongoose = require('mongoose');

//3.2.- Jugadores: id = Num - Nombre = String(120) - Nro = Num - Titular = Boolean - Equipo id = Num - Equipo nombre = String - Estado = Boolean.-

const Jugadas = new mongoose.Schema({

    id: { type: Number },
    nombre: { type: String },
    jugadas: Array,
    estado: { type: Boolean }
});

module.exports = mongoose.model('Jugadas', Jugadas);