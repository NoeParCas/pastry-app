const { Schema, model } = require("mongoose");

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
    enum: ["Dulces", "Sin gluten", "Saludable"],
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  pasos: [
    {
      type: String,
    },
  ],

  ingredientes: [
     String
  ],
});

const RecetaModel = model("receta", recetaSchema); 

module.exports = RecetaModel
