const { Schema, model} = require("mongoose");

const recetaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },

  creacion: {
    type: Date,
    default: Date.now,
  },

  tipo: {
    type: String,
    enum: ["Dulce", "Sin-gluten", "Saludable"],
  },

  duracion: {
    type: Number,
  },

  dificultad: {
    type: String,
    enum: ["Alta", "Media", "Baja"],
    
  },

  imagen: {
    type: String,
   required: true, 
  },

  autor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  pasos: [
    {numero: {type: Number}, descripcion:{type: String}},
  ],

  ingredientes: [{type: String}],

 //* BONUS 1: COMENTARIOS (MODELO A MAYORES | RELACION ONE TO MANY)

//  comentario: {
//   type: Schema.Types.ObjectId,
//   ref: "Comentario",
// },



});

const RecetaModel = model("Receta", recetaSchema); 

module.exports = RecetaModel
