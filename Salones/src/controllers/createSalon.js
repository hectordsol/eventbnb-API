const axios = require("axios");
const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const salon = req.body;
    const {propietario}=req.body;
    console.log("creando salon de",propietario);
    const usuarioEncontrado = await axios.get(`http://database:5001/Usuario/${propietario}`);
    // console.log(`Salones del usuario ${usuarioEncontrado.data} :`,usuarioEncontrado.data.salones);
    const newSalon = await Salon.create(salon);
    usuarioEncontrado.data.salones.push(newSalon._id);
    console.log(usuarioEncontrado);
    response(res,201,newSalon);
}