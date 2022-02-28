const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn")
const User =require("../models/User.model")
const RecetaModel = require("../models/Receta.model")
const uploader =require("../middleware/uploader")


 router.get('/',isLoggedIn,(req, res, next) =>{ 
       //console.log( "usuario autorizado") 
       res.render("perfil/perfil-usuario.hbs")
 })

 router.get ("/crear-receta", isLoggedIn, (req, res, next) => {
      res.render("recetas/crear-receta.hbs")
 })

 router.post ("/crear-receta", isLoggedIn, uploader.single("receta-img"), (req, res, next) => {
     const {nombre,creacion, tipo, dificultad, duracion, autor} = req.body
     // console.log(req.body)
     // console.log(req.file, "HOLA")
     //!APUNTAR RELACION AUTOR CON ID DE USUARIO
     RecetaModel.create({nombre,creacion, duracion, imagen: req.file.path , tipo, dificultad, autor})

     .then((crearReceta) =>{
          // console.log(crearReceta, "HOLA")
     res.redirect(`/perfil/${crearReceta._id}/actualizar`)
     })
     .catch((err) => {
          next(err);
     })
 })

 router.get ("/:id/actualizar",isLoggedIn, (req, res, next) => {
      const {id} = req.params
      const {nombre,creacion, tipo, dificultad, duracion, autor, ingredientes} = req.body

      RecetaModel.findById(id)
      .then((recetaActualizar) => {
          res.render("recetas/actualizar-receta.hbs", {recetaActualizar})
           
      })
      .catch((err) => {
           next(err);
      })
      
 }) 

 router.post ("/:id/actualizar",isLoggedIn, (req, res, next) =>{
     const {id} = req.params
     const {ingredientes} = req.body

     // console.log("CHOCOLATE",req.body)
     RecetaModel.findByIdAndUpdate(id,{
          $push: {ingredientes},
     })
     .then((actualizarReceta) =>{
          res.redirect(`/perfil/${actualizarReceta._id}/actualizar` )
          
     })
     .catch((err) => {
          next(err);
     })
 })








module.exports = router;