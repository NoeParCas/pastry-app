
const router = require("express").Router();
const RecetaModel = require("../models/Receta.model")


router.get ("/", (req,res,next)=>{
    res.render("recetas/recetario.hbs")
  })

  router.get ("/dulce", (req, res, next) => {
  RecetaModel.find({tipo: "Dulce"})
    .then((tipoDulce) => {
        res.render("recetas/tipos-recetas.hbs", {tipoDulce})
    })
    .catch((error) => {
        next(error);
    })
  })

  router.get ("/sin-gluten", (req, res, next) => {
    RecetaModel.find({tipo: "Sin gluten"})
      .then((tipoDulce) => {
          res.render("recetas/tipos-recetas.hbs", {tipoDulce})
      })
      .catch((error) => {
          next(error);
      })
    })

    router.get ("/saludable", (req, res, next) => {
        RecetaModel.find({tipo: "Saludable"})
          .then((tipoDulce) => {
              res.render("recetas/tipos-recetas.hbs", {tipoDulce})
          })
          .catch((error) => {
              next(error);
          })
        })

    router.get ("/:id/detalles", (req, res, next) => {

        RecetaModel.findById(req.params.id)
        .then((recetaDetalle)=>{
            console.log(recetaDetalle.pasos);
            res.render("recetas/receta", {recetaDetalle})
        })
        .catch((error) => {
            next(error);
        })
    })





  module.exports = router;