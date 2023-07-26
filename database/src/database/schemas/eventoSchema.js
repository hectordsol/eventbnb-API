const {Schema}=require("mongoose");
const eventoSchema = new Schema(
{
    // nombre_evento: String,
    // tipo_evento: String,
    Fecha_inicio: Date,
    Fecha_fin: Date,
    cliente: {type: String, ref: "Usuario"},
    salon: {type: String, ref: "Salon"},
    reserva: {type: String, ref: "Reserva", default:null},
    review: {type: String, ref: "Review", default:null}
  });
  eventoSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
      .populate("salon", ["_id","nombre"])
      .populate("reserva", ["monto", "descripcion", "unit_price", "fecha", "Fecha_fin_hora"])
      .populate("review",["comentario","puntaje","fecha"])
  };
  eventoSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
    .populate("salon", ["_id","nombre"])
    .populate("reserva", ["monto", "descripcion", "unit_price", "fecha", "Fecha_fin_hora"])
    .populate("review",["comentario","puntaje","fecha"])
  };
  eventoSchema.statics.insert = async function (evento){
    return await this.create(evento);
  };
  eventoSchema.statics.change = async function (id, evento){
    return await this.findByIdAndUpdate(id, evento,{new:true});
  };
  eventoSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  // Función para verificar superposición de fechas
  eventoSchema.statics.verificarFechas = async function (
    salonId,
    fechaInicio,
    fechaFin
  ) {
    return await this.find({
      salon: salonId,
      $or: [
        { Fecha_inicio: { $gte: fechaInicio, $lt: fechaFin } },
        { Fecha_fin: { $gt: fechaInicio, $lte: fechaFin } },
        { $and: [{ Fecha_inicio: { $lte: fechaInicio } }, { Fecha_fin: { $gte: fechaFin } }] }
      
        // // Caso 1: Fecha_inicio y Fecha_fin se encuentran dentro del rango de búsqueda
        // { Fecha_inicio: { $gte: fechaInicio }, Fecha_fin: { $lte: fechaFin } },
        // // Caso 2: Fecha_inicio está dentro del rango de búsqueda y Fecha_fin está después del rango de búsqueda
        // { Fecha_inicio: { $gte: fechaInicio }, Fecha_inicio: { $lte: fechaFin } },
        // // Caso 3: Fecha_fin está dentro del rango de búsqueda y Fecha_inicio está antes del rango de búsqueda
        // { Fecha_fin: { $gte: fechaInicio }, Fecha_fin: { $lte: fechaFin } },
        // // Caso 4: Fecha_inicio y Fecha_fin contienen todo el rango de búsqueda
        // { Fecha_inicio: { $lte: fechaInicio }, Fecha_fin: { $gte: fechaFin } },
      ],
    });
  };
  module.exports = eventoSchema;