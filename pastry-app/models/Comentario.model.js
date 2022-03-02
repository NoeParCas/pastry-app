const { Schema, model} = require("mongoose");

const comentarioSchema = new Schema ({
    comentario: {
        type: String,
    },
   
    receta: {
        type: Schema.Types.ObjectId,
        ref: "Receta",
      },

    autor: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    
    fecha: {
        type: Date,
        default: Date.now,
      },
})


const ComentarioModel = model("Comentario", comentarioSchema); 

module.exports = ComentarioModel