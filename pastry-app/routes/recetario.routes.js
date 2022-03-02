
const router = require("express").Router();
const ComentarioModel = require("../models/Comentario.model");
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

    router.get ("/:id/detalles", async (req, res, next) => {
       // Hay que buscar los comentarios por id de la receta

       // Printear los comentarios con el autor

        try{
            const {id} = req.params         
                                                                        // con la key del modelo Receta
                                                                        //        ||
            const  recetaDetalle = await RecetaModel.findById(id).populate("autor")
           
            const comentarios = await ComentarioModel.find({receta:id}).populate("autor")    
           
            res.render("recetas/receta", {recetaDetalle, comentarios})
       
        }
        catch(error)  {
            next(error);
        }
    })

    router.post ("/:id/detalles", async (req, res, next) => {
        // Crear el comentario
        const {comentario} = req.body
        const {id} = req.params
        
       try{
        const comentarios = await ComentarioModel.create({comentario, autor:req.session.user._id , receta: id })
        res.redirect(`/recetario/${id}/detalles`)
       }
       catch(err){
           next(err)
       }
     
         
     })
  



  module.exports = router;