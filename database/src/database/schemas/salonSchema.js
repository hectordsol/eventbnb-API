const {Schema}=require("mongoose");
const salonSchema = new Schema(
{
    nombre: String,
    domicilio: String,
    localidad: String,
    ubicacion: String,
    imagenes: {Type: Array},
    telefono: Number,
    precio: Number,
    capacidad_max: Number,
    superficie: Number,
    aire_acondicionado: Number,
    parrilla:Number,
    pantalla:Number,
    personal_seguridad:Number,
    baño:Number,
    baño_accesibilidad:Boolean,
    accesibilidad:Boolean,
    estacionamiento: Boolean,
    catering: Boolean,
    mesas_sillas: Boolean,
    luces: Boolean,
    sonido: Boolean,
    fotografia: Boolean,
    decoracion: Boolean,
    pileta: Boolean,
    wifi:Boolean,
    cocina:Boolean,
    escenario:Boolean,
    descripcion: String,
    borrado: {type: Boolean, default: false},
    fechaCreacion: { type: Date, default: Date.now },
    propietario: {type: String, ref: "Usuario"},
    eventos: [{type: String, ref: "Evento"}]

  });
  salonSchema.statics.list = async function (){
    return await this.find()
      .populate("propietario",["_id","nombre","apellido"])
      .populate
      ({
        path: "eventos",
        select: ["_id","nombre_evento","tipo_evento","Fecha_inicio","Fecha_fin"],
        populate: {
          path: "review",
          select: ["_id","comentario","puntaje","fecha"],
          populate: {
              path: "cliente",
              select:["_id","nombre","apellido"],
          }
        }
      })
  };
  salonSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("propietario",["_id","nombre","apellido"])
    .populate
    ({
      path: "eventos",
      select: ["_id","Fecha_inicio","Fecha_fin"],
      populate: {
        path: "cliente",
        select:["_id","nombre","apellido"],
      },
      populate: {
        path: "review",
        select: ["_id","comentario","puntaje","fecha"],
      }
    })
  };


  // ({
  //   path: "eventos",
  //   select: ["_id","nombre_evento","tipo_evento","Fecha_inicio","Fecha_fin"],
  //   populate: {
  //     path: "review",
  //     select: ["_id","comentario","puntaje","fecha"],
  //     populate: {
  //         path: "cliente",
  //         select:["_id","nombre","apellido"],
  //     }
  //   }
  // })
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