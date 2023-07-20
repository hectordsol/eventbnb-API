const axios = require("axios");
const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const salon = req.body;
    const {propietario}=req.body;
    const usuarioEncontrado = await axios.get(`http://database:5001/Usuario/${propietario}`);
    const newSalon = await Salon.create(salon);
    usuarioEncontrado.data.salones.push(newSalon._id);
    await axios.put(`http://database:5001/Usuario/${propietario}`,usuarioEncontrado.data);
    response(res,201,newSalon);
}