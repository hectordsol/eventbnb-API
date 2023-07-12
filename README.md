# eventbnb-API 
MODELOS

<h3>Usuario:</h3>

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
GET 34.125.90.13:5000/usuarios/ devuelve todos los usuarios <br>
GET 34.125.90.13:5000/usuarios/?email=email devuelve el primer usuario con encontrado con 
email por query <br>
GET 34.125.90.13:5000/usuarios/id devuelve usuario id<br>
POST 34.125.90.13:5000/usuarios/ enviando body crea usuario y genera id<br>
PUT 34.125.90.13:5000/usuarios/id actualiza usuario id enviando body<br>
DELETE 34.125.90.13:5000/usuarios/id borra usuario id<br>

<h3>Salon:</h3>
<p>  
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

    propietario: {type: String, ref: "User"},

    reviews: [{type: String, ref: "Review"}],

    eventos: [{type: String, ref: "Evento"}]
    
}
</p> 

GET 34.125.90.13:5000/salones/ devuelve todos los salones<br>
POST 34.125.90.13:5000/salones/ enviando body crea salon y genera id<br>
GET 34.125.90.13:5000/salones/id devuelve salon id<br>
PUT 34.125.90.13:5000/salones/id actualiza salon id enviando body<br>
DELETE 34.125.90.13:5000/salones/id borra salon id <br>

<h3>Evento:</h3>

<p>
{

    nombre_evento: String,
    tipo_evento: String,
    Fecha_inicio: String,
    Fecha_fin: String,
    clientes: [{type: String, ref: "User"}],
    salon: {type: String, ref: "Salon"},
  }
</p>
GET 34.125.90.13:5000/eventos/id devuelve evento id<br>
GET 34.125.90.13:5000/eventos/ devuelve todos los eventos<br>
POST 34.125.90.13:5000/eventos/ enviando body crea evento y genera id<br>
PUT 34.125.90.13:5000/eventos/id actualiza evento id enviando body<br>
DELETE 34.125.90.13:5000/eventos/id borra evento id<br>

















