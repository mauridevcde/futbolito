var Entrenador = require('../models/entrenador');

exports.insert_entrenador = async (req, res) => {

    //    console.log(req.body);
    let id = Date.now();

    const entrenador = new Entrenador({
        id: id,
        nombre: req.body.nombre,
        equipo_id: req.body.equipo_id,
        equipo_nombre: req.body.equipo_nombre,
        estado: true
    });
    //    console.log('entrenadoresPost:', entrenador);
    await entrenador.save();
    res.json({
        'status': 'Entrenador creado',
        entrenador
    });
};

exports.read_all_entrenadores = async (req, res) => {

    const entrenadores = await Entrenador.find({ "estado": true });

    res.json(
        entrenadores
    )

};

exports.update_entrenador = async (req, res) => {

    const { id, ...entrenador } = req.body;

    const entrenadorActual = await Entrenador.findOneAndUpdate({ "id": id }, entrenador, { new: true });

    res.json({
        'status': 'Entrenador Actualizado',
        entrenadorActual
    });

};

exports.delete_entrenador = async (req, res) => {

    const id = req.body.id;

    const entrenadorActual = await Entrenador.findOneAndUpdate({ "id": id }, { "estado": false });

    res.json({
        'status': 'Entrenador Eliminado',
        entrenadorActual
    });

};