const axios = require("axios");
const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {nombre_evento,tipo_evento,Fecha_inicio,Fecha_fin,cliente,salon}=req.body;
    let evento=
    {
        nombre_evento,
        tipo_evento,
        Fecha_inicio: new Date(Fecha_inicio),
        Fecha_fin:new Date(Fecha_fin),
        cliente,
        salon,
    };
    const clienteEncontrado = await axios.get(`http://database:5001/Usuario/${cliente}`);//busco cliente
    const salonEncontrado = await axios.get(`http://database:5001/Salon/${salon}`);//busco salon
    const newEvento = await Evento.create(evento);//creo registro de evento en la BD
    clienteEncontrado.data.eventos.push(newEvento._id);//cargo el id del evento en el array de eventos de usuario
    await axios.put(`http://database:5001/Usuario/${cliente}`,clienteEncontrado.data);//actualizo el usuario en la BD
    salonEncontrado.data.eventos.push(newEvento._id);//cargo el id del evento en el array de eventos de salon
    await axios.put(`http://database:5001/Salon/${salon}`,salonEncontrado.data);//actualizo el salon en la BD
    response(res,201,newEvento);
}