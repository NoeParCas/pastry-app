const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, 
      required: true, 
    },
    password: {
      type: String,
      required: true, 
    }, 
    email: {
      type: String,
      unique: true, 
      required: true,
    }, 
    //* POSIBLE IMPLEMENTACIÓN DE ADMINISTRADOR (BONUS)
    role: {
      type:String,
      enum : ["Admin", "User"], 
      default: "User"
    }
  },


  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
