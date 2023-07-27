const axios = require("axios");
const URL_FRONT = process.env.URL_FRONT||"http://localhost:3000";

module.exports = async (req, res) => {
    const status = req.query;
    console.log("ESTO ES SUCCESS: ");
    console.log(status.preference_id);
    const reservaEncontrada  //busco reserva
    = await axios.get(`http://database:5001/Reserva/${status.preference_id}`);
    reservaEncontrada.data.pagado=true;//Cambio pagado a true
    //actualizo reserva para que figure como pagada
    await axios.put(`http://database:5001/Reserva/${status.preference_id}`,reservaEncontrada.data);
    const statusCode=200;
    res.redirect(URL_FRONT);
}