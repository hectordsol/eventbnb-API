const {Schema}=require("mongoose");
const usuarioSchema = new Schema(
{
    nombre: String,
    // {
    //   type: String,
    //   required: [true, "El nombre es requerido"],
    //   minLength: [1, "El nombre debe tener al menos 1 caracter"],
    //   maxLength: [20, "El nombre puede tener hasta 20 caracteres"],
    // },
    apellido: String,
    //  {
    //   type: String,
    //   required: [true, "El apellido es requerido"],
    //   minLength: [1, "El nombre debe tener al menos 1 caracter"],
    //   maxLength: [20, "El nombre puede tener hasta 20 caracteres"],
    // },
    email: String, 
    // {
    //   type: String,
    //   unique: true,
    //   required: [true, "Email es requerido"],
    //   match: [
    //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     "Email es invalido",
    //   ],
    // },
    password: String,
    google: Boolean,
    telefono: String,
    fechaNacimiento: String,
    domicilio: String,
    localidad: String,
    imagen: String,
    pais: String,
    borrado: {type: Boolean, default: false},
    fechaCreacion: { type: Date, default: Date.now },
    salones: [{type: String, ref: "Salon"}],
    eventos: [{type: String, ref: "Evento"}]
  });
  usuarioSchema.statics.list = async function (){
    return await this.find()
      .populate("salones",["_id","nombre","domicilio"])
      .populate("eventos")
  };
  usuarioSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
      .populate("salones")
      .populate("eventos")
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
  usuarioSchema.statics.remover = async function (id) {
    console.log(id);
    return await this.findByIdAndRemove(id);
  };
  module.exports = usuarioSchema;