const axios = require("axios");
const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {comentario,puntaje,cliente,evento}=req.body;
    //si llegó hasta acá es porque son id de cliente y evento son válidos
    let review=
    {
        comentario,
        puntaje,
        cliente,
        evento,
    };
    //Creo review en Base de Datos
    const newReview = await Review.create(review);
    const eventoEncontrado  
          = await axios.get(`http://database:5001/Evento/${evento}`);//busco evento

    eventoEncontrado.data.review=newReview._id;//Cargo id review en evento
    //actualizo evento con el review
    await axios.put(`http://database:5001/Evento/${evento}`,eventoEncontrado.data);
    const salonEncontrado    //busco salon
          = await axios.get(`http://database:5001/Salon/${eventoEncontrado.data.salon}`);
    salonEncontrado.data.reviews.push(newReview._id);//Cargo id de review en array de reviews
    //actualizo salon con el review
    await axios.put(`http://database:5001/Salon/${eventoEncontrado.data.salon}`,salonEncontrado.data);

    response(res,201,newReview);
}