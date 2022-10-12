const mongoose = require('mongoose');

//3.1.- Entrenador : id = Num - Nombre = String(120) - Equipo = Num - Estado = Boolean.-


const Entrenador = new mongoose.Schema({

    id: { type: Number },
    nombre: { type: String },
    equipo_id: { type: Number },
    equipo_nombre: { type: String },
    estado: { type: Boolean }
});

module.exports = mongoose.model('Entrenador', Entrenador);