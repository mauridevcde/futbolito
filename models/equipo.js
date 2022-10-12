const mongoose = require('mongoose');

//Datos del Equipo de los documentos de Google Drive
//3.4.- Equipos : id = Num - Nombre = String(120) - Nro = Num - Estado = Boolean.-

const Equipo = new mongoose.Schema({

    id: { type: Number },
    nombre: { type: String },
    nro: { type: Number },
    estado: { type: Boolean }
});

module.exports = mongoose.model('Equipo', Equipo);