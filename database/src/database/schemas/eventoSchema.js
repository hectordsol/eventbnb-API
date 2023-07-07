const {Schema}=require("mongoose");
const eventoSchema = new Schema(
{
    nombre_evento: String,
    tipo_evento: String,
    Fecha_inicio: String,
    Fecha_fin: String,
    clientes: [{type: String, ref: "User"}],
    salon: {type: String, ref: "Salon"},
    // review: {type: String, ref: "Review"}
  });
  eventoSchema.statics.list = async function (){
    return await this.find()
      .populate("clientes",["_id","nombre","apellido"])
      .populate("salon", ["_id","nombre"])
      // .populate("review",["_id","comentario"])
  };
  eventoSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("clientes",["_id","nombre","apellido"])
    .populate("salon", ["_id","nombre"])
    // .populate("review",["_id","comentario"])
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
  module.exports = eventoSchema;