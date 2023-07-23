const Evento = require('../data');
const { response } = require('../utils');

module.exports = async (req, res,next) => {
    
    const {salon,Fecha_inicio, Fecha_fin}=req.body;
    const fechaInicio= new Date(Fecha_inicio);
    const fechaFin= new Date(Fecha_fin);
    const eventosSuperpuestos = await Evento.verificarFechas(
      salon,
      fechaInicio,
      fechaFin
  );
  if (eventosSuperpuestos.length === 0) {
    console.log("No hay superposición de fechas.");
    return next();
  } else {
    console.log("Se encontraron eventos con superposición de fechas:");
    console.log(eventosSuperpuestos);
    response(res,403,{message:'Se encontraron eventos con superposición de fechas:',eventosSuperpuestos});
  }
}