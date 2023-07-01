# eventbnb-API 
Modelos creados por ahora
Eventos:
{
    nombre_evento: String,
    tipo_evento: String,
    Fecha_inicio: String,
    Fecha_fin: String,
    clientes: [{type: String, ref: "User"}],
    salon: {type: String, ref: "Salon"},
  }
Usuario:
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
  }
  
  Salon:
  {
    nombre: String,
    domicilio: String,
    localidad: String,
    ubicacion: String,
    release_date: Date,
    propietario: {type: String, ref: "User"},
    eventos: [{type: String, ref: "Evento"}]
    }
    
GET 34.125.90.13:5000/usuarios/ devuelve todos los usuarios
GET 34.125.90.13:5000/eventos/ devuelve todos los eventos
GET 34.125.90.13:5000/salones/ devuelve todos los salones

POST 34.125.90.13:5000/usuarios/ enviando body crea usuario y genera id
POST 34.125.90.13:5000/eventos/ enviando body crea evento y genera id
POST 34.125.90.13:5000/salones/ enviando body crea salon y genera id

GET 34.125.90.13:5000/usuarios/id devuelve usuario id
GET 34.125.90.13:5000/eventos/id devuelve evento id
GET 34.125.90.13:5000/salones/id devuelve salon id

PUT 34.125.90.13:5000/usuarios/id actualiza usuario id enviando body
PUT 34.125.90.13:5000/eventos/id actualiza evento id enviando body
PUT 34.125.90.13:5000/salones/id actualiza salon id enviando body

DELETE 34.125.90.13:5000/usuarios/id borra usuario id
DELETE 34.125.90.13:5000/eventos/id borra evento id
DELETE 34.125.90.13:5000/salones/id borra salon id (editado) 
