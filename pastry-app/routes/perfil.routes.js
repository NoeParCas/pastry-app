const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn")
const User =require("../models/User.model")
const RecetaModel = require("../models/Receta.model")


 router.get('/',isLoggedIn,(req, res, next) =>{ 
       //console.log( "usuario autorizado") 
       res.render("perfil/perfil-usuario.hbs")
 })

 router.get ("/crear-receta", isLoggedIn, (req, res, next) => {
      res.render("recetas/crear-receta.hbs")
 })

 router.post ("/crear-receta", isLoggedIn, (req, res, next) => {
      const {nombre,creacion, imagen, tipo, dificultad, autor} = req.body

      RecetaModel.create({nombre,creacion, imagen, tipo, dificultad, autor})
      .then((crearReceta) =>{
            res.redirect(`/${crearReceta._id}/actualizar`)
      })
      .catch((err) => {
          next(err);
     })
 })

 router.get ("/:id/actualizar",isLoggedIn, (req, res, next) => {
      const {id} = req.params

      RecetaModel.findById(id) 
      .then((recetaActualizar) => {
           res.render("recetas/actualizar-receta.hbs", {recetaActualizar})
      })
      .catch((err) => {
           next(err);
      })
      
 }) 








module.exports = router;