var Jugador = require('../models/jugador');

exports.insert_jugador = async (req, res) => {

    //    console.log(req.body);
    let id = Date.now();

    const jugador = new Jugador({
        id: id,
        nombre: req.body.nombre,
        nro: req.body.nro,
        titular: req.body.titular,
        equipo_id: req.body.equipo_id,
        equipo_nombre: req.body.equipo_nombre,
        estado: true
    });
    //    console.log('jugadoresPost:', jugador);
    await jugador.save();
    res.json({
        'status': 'Jugador creado',
        jugador
    });
};

exports.read_all_jugadores = async (req, res) => {

    const jugadores = await Jugador.find({ "estado": true });

    res.json(
        jugadores
    )

};

exports.update_jugador = async (req, res) => {

    const { id, ...jugador } = req.body;

    const jugadorActual = await Jugador.findOneAndUpdate({ "id": id }, jugador, { new: true });

    res.json({
        'status': 'Jugador Actualizado',
        jugadorActual
    });

};

exports.delete_jugador = async (req, res) => {

    const id = req.body.id;

    const jugadorActual = await Jugador.findOneAndUpdate({ "id": id }, { "estado": false });

    res.json({
        'status': 'Jugador Eliminado',
        jugadorActual
    });

};