const axios = require("axios");
const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const review = req.body;
    const {evento}=req.body;//si llegó hasta acá es porque son id de cliente y evento válidos
    const eventoEncontrado  
          = await axios.get(`http://database:5001/Evento/${evento}`);//busco evento
    const newReview = 
          await Review.create(review);//Creo review en Base de Datos
    eventoEncontrado.data.review=newReview._id;//Cargo id review en evento
    const salonEncontrado    //busco salon
          = await axios.get(`http://database:5001/Salon/${eventoEncontrado.data.salon}`);
    salonEncontrado.data.reviews.push(newReview._id);//Cargo id de review en salon
    await axios.put(`http://database:5001/Salon/${eventoEncontrado.data.salon}`,
          salonEncontrado.data);//actualizo salon con el review
    await axios.put(`http://database:5001/Evento/${evento}`,
          eventoEncontrado.data);//actualizo evento con el review
    response(res,201,newReview);
}