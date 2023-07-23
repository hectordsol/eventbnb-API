const axios = require("axios");
const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;
    //busco evento
    const eventoEncontrado = await axios.get(`http://database:5001/Evento/${id}`);
    //busco cliente}
    const clienteEncontrado = await axios.get(`http://database:5001/Usuario/${eventoEncontrado.data.cliente._id}`);
    //busco salon
    const salonEncontrado = await axios.get(`http://database:5001/Salon/${eventoEncontrado.data.salon._id}`);
    //elimino id del array de eventos en el cliente
    clienteEncontrado.data.eventos= clienteEncontrado.data.eventos.filter((e)=>e._id!==id);
    //elimino id del array de eventos en el salon
    salonEncontrado.data.eventos  = salonEncontrado.data.eventos.filter((e)=>e._id!==id);
    //actualizo el cliente
    await axios.put(`http://database:5001/Usuario/${clienteEncontrado.data._id}`,clienteEncontrado.data);
    //actualizo el salon
    await axios.put(`http://database:5001/Salon/${salonEncontrado.data._id}`,salonEncontrado.data);
    //borro de la base de datos el evento
    const eventoBorrado = await Evento.remove(id);
    let statusCode;
    eventoBorrado?statusCode=200:statusCode=404;
    response(res, statusCode, eventoBorrado);
}