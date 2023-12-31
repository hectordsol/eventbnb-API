const axios = require("axios");
const Reserva = require('../data');

const { response } = require('../utils');
const { mercadoPago } = require('./mercadoPago')

module.exports = async (req, res) => {
    const { Fecha_inicio_hora, Fecha_fin_hora, monto, cliente, evento}=req.body;
    //si llegó hasta acá es porque son id de cliente y evento son válidos
    const descripcion ="Alquiler de Salon para Evento"
    let reserva=
    {
        Fecha_inicio_hora,
        Fecha_fin_hora,
        monto,
        descripcion,
        cliente,
        evento,
    };

    const {id,init_point} = await mercadoPago(reserva);
    reserva={...reserva,init_point,_id:id};
    console.log("probando",reserva);
    const newReserva = await Reserva.create(reserva);

    const eventoEncontrado  
          = await axios.get(`http://database:5001/Evento/${evento}`);//busco evento

    eventoEncontrado.data.reserva=newReserva._id;//Cargo id reserva en evento
    //actualizo evento con reserva
    await axios.put(`http://database:5001/Evento/${evento}`,eventoEncontrado.data);
    response(res,201,newReserva );
}