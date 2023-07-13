const {Schema}=require("mongoose");
const reservaSchema = new Schema(
{
    _id: String,
    Fecha_inicio_hora: Date,
    Fecha_fin_hora: Date,
    cliente: {type: String, ref: "Usuario"},
    salon: {type: String, ref: "Salon"}
  });
  reservaSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
      .populate("salon",["_id","Fecha_inicio_hora","Fecha_fin_hora"])
  };
  reservaSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
    .populate("salon",["_id","Fecha_inicio_hora","Fecha_fin_hora"])
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