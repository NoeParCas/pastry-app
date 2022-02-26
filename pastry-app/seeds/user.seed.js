const userArr = [
    {
        username: "Victor",
        email: "victor@gmail.com",
        password: 'Zapatilla_Voladora90'
    },
    {
        username: "Noelia",
        email: "noe@gmail.com",
        password: 'LosPugsMolan!!88'
    },
    {
        username: "Aaron",
        email: "aaron@gmail.com",
        password: 'Windsurf_Top93'
    },
    {
        username: "Jorge",
        email: "jorge@gmail.com",
        password: 'Patata_Banana!76'
    },
];

const User = require("../models/User.model")

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pastry-app")
.then((response) => {
    //console.log("CONECTADOS")
    return User.insertMany(userArr)
})
.then((response) => {
    //console.log("USUARIOS AÑADIDOS CORRECTAMENTE")
    mongoose.connection.close()
})
.catch((err)=>{
    console.log("ERROR")
})