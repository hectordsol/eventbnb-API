const {Schema}=require("mongoose");
const usuarioSchema = new Schema(
{
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    telefono: String,
    fechaNacimiento: String,
    domicilio: String,
    localidad: String,
    pais: String,
    salones: [{type: String, ref: "Salon"}],
    // reviews: [{type: String, ref: "Review"}]
  });
  usuarioSchema.statics.list = async function (){
    return await this.find()
      .populate("salones",["_id","nombre","domicilio"])
  };
  usuarioSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
      .populate("salones",["_id","nombre","domicilio"])
  };
  usuarioSchema.statics.getByEmail = async function (email){
    console.log(email);
    return await this.findOne({email});
    };
  usuarioSchema.statics.insert = async function (usuario){
    return await this.create(usuario);
  };
  usuarioSchema.statics.change = async function (id, usuario){
    return await this.findByIdAndUpdate(id, usuario,{new:true});
  };
  usuarioSchema.statics.remove = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = usuarioSchema;