var Equipo = require('../models/equipo');

exports.insert_equipo = async (req, res) => {

    //    console.log(req.body);
    let id = Date.now();

    const equipo = new Equipo({
        id: id,
        nombre: req.body.nombre,
        nro: req.body.nro,
        estado: true
    });
    //    console.log('equiposPost:', equipo);
    await equipo.save();
    res.json({
        'status': 'Equipo creado',
        equipo
    });
};

exports.read_all_equipos = async (req, res) => {

    const equipos = await Equipo.find({ "estado": true });

    res.json(
        equipos
    )

};

exports.update_equipo = async (req, res) => {

    const { id, ...equipo } = req.body;

    const equipoActual = await Equipo.findOneAndUpdate({ "id": id }, equipo, { new: true });

    res.json(equipoActual);

};

exports.delete_equipo = async (req, res) => {

    const id = req.body.id;

    const equipoActual = await Equipo.findOneAndUpdate({ "id": id }, { "estado": false });

    res.json(equipoActual);

};