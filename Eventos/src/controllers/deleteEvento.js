const axios = require("axios");
const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;
    //busco evento
    const eventoEncontrado = await axios.get(`http://database:5001/Evento/${id}`);
    //busco cliente}
    console.log("cliente id ",eventoEncontrado.data.cliente._id);
    console.log("salon id ",eventoEncontrado.data.salon._id);
    // const clienteEncontrado = await axios.get(`http://database:5001/Usuario/${eventoEncontrado.data.cliente}`);
    //busco salon
  //  const salonEncontrado = await axios.get(`http://database:5001/Salon/${eventoEncontrado.data.salon}`);
    //elimino id del array de eventos en el cliente
 //   clienteEncontrado.data.eventos= clienteEncontrado.data.eventos.filter((e)=>e!==id);
    //elimino id del array de eventos en el salon
//salonEncontrado.data.eventos  = salonEncontrado.data.eventos.filter((e)=>e!==id)
    //actualizo el cliente
   //  await axios.put(`http://database:5001/Usuario/${eventoEncontrado.data.cliente}`,clienteEncontrado);
     //actualizo el salon
  //   await axios.put(`http://database:5001/Salon/${eventoEncontrado.data.salon}`,salonEncontrado);
     //borro de la base de datos el evento
 //   const eventoBorrado = await Evento.remove(id);
    let statusCode;
    eventoBorrado?statusCode=200:statusCode=404;
    response(res, statusCode, eventoBorrado);
}