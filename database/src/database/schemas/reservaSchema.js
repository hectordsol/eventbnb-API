const {Schema}=require("mongoose");
const reservaSchema = new Schema(
{
    _id: String,
    Fecha_inicio_hora: Date,
    Fecha_fin_hora: Date,
    monto: String,
    descripcion: String,
    init_point: String,
    pagado: {type: Boolean, default:false},
    cliente: {type: String, ref: "Usuario"},
    evento: {type: String, ref: "Evento"}
  });
  reservaSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
      .populate("evento")
  };
  reservaSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
    .populate("evento")
  };
  reservaSchema.statics.insert = async function (reserva){
    return await this.create(reserva);
  };
  reservaSchema.statics.change = async function (id, reserva){
    return await this.findByIdAndUpdate(id, reserva,{new:true});
  };
  reservaSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = reservaSchema;