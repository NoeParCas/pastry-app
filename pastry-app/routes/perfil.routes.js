const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn")
const User =require("../models/User.model")

 router.get('/',isLoggedIn,(req, res, next) =>{ 
       console.log( "usuario autorizado") 
       res.render("perfil/perfil-usuario.hbs")
 })




module.exports = router;