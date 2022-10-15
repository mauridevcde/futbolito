var JugadasAll = require('../models/jugadasAll');

exports.insert_jugadasAll = async (req, res) => {

    //    console.log(req.body);|
    let id = Date.now();

    const jugadasAll = new JugadasAll({
        id: id,
        nombre: req.body.nombre,
        jugadas: req.body.jugadas,
        estado: true
    });
    //    console.log('jugadasAllesPost:', jugadasAll);
    await jugadasAll.save();
    res.json({
        'status': 'jugadasAll creado',
        jugadasAll
    });
};

exports.read_jugadasAll = async (req, res) => {

    const jugadasAlles = await JugadasAll.find({ "estado": true });

    res.json(
        jugadasAlles
    )

};

exports.update_jugadasAll = async (req, res) => {

    const { id, ...jugadasAll } = req.body;

    const jugadasAllActual = await JugadasAll.findOneAndUpdate({ "id": id }, jugadasAll, { new: true });

    res.json({
        'status': 'jugadasAll Actualizado',
        jugadasAllActual
    });

};

exports.delete_jugadasAll = async (req, res) => {

    const id = req.body.id;

    const jugadasAllActual = await JugadasAll.findOneAndUpdate({ "id": id }, { "estado": false });

    res.json({
        'status': 'jugadasAll Eliminado',
        jugadasAllActual
    });

};