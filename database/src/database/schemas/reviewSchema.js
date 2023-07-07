const {Schema}=require("mongoose");
const reviewSchema = new Schema(
{
    _id: String,
    comentario: String,
    puntaje: String,
    fecha: Date,
    cliente: {type: String, ref: "User"},
    evento: {type: String, ref: "Evento"}
  });
  reviewSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
      .populate("salon",["_id","Fecha_inicio_hora","Fecha_fin_hora"])
  };
  reviewSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
    .populate("salon",["_id","Fecha_inicio_hora","Fecha_fin_hora"])
  };
  reviewSchema.statics.insert = async function (review){
    return await this.create(review);
  };
  reviewSchema.statics.change = async function (id, review){
    return await this.findByIdAndUpdate(id, review,{new:true});
  };
  reviewSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = reviewSchema;