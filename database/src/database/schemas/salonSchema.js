const {Schema}=require("mongoose");
const salonSchema = new Schema(
{
    nombre: String,
    domicilio: String,
    localidad: String,
    ubicacion: String,
    imagenes: {Type: [String]},

    capacidad_max: Number,
    espaciom2: Number,
    precio: Number,
    estacionamiento: Boolean,
    catering: Boolean,
    mesas_sillas: Boolean,
    luces: Boolean,
    sonido: Boolean,
    fotografia: Boolean,
    decoracion: Boolean,
    pileta: Boolean,
    descripcion: String,

    propietario: {type: String, ref: "Usuario"},
    reviews: [{type: String, ref: "Review"}],
    eventos: [{type: String, ref: "Evento"}]

  });
  salonSchema.statics.list = async function (){
    return await this.find()
      .populate("propietario",["_id","nombre","apellido"])
      .populate("eventos",["_id","nombre_evento"])
  };
  salonSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("propietario",["_id","nombre","apellido"])
    .populate("eventos",["_id","nombre_evento"])
    .populate("reviews",["_id","comentario", "puntaje", "fecha", "cliente", "evento"])
  };
  salonSchema.statics.insert = async function (salon){
    return await this.create(salon);
  };
  salonSchema.statics.change = async function (id, salon){
    return await this.findByIdAndUpdate(id, salon,{new:true});
  };
  salonSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };  
module.exports = salonSchema;