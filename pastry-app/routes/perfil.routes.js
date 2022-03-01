const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const RecetaModel = require("../models/Receta.model");
const uploader = require("../middleware/uploader");

router.get("/", isLoggedIn, (req, res, next) => {

     RecetaModel.find({autor: req.session.user._id})
     // .populate("autor")
  //console.log( "usuario autorizado")
  .then((recetas) =>{
     console.log(recetas);
     res.render("perfil/perfil-usuario.hbs", {recetas});
  })
});

router.get("/crear-receta", isLoggedIn, (req, res, next) => {
  res.render("recetas/crear-receta.hbs");
});

router.post(
  "/crear-receta",
  isLoggedIn,
  uploader.single("receta-img"),
  (req, res, next) => {
    const { nombre, creacion, tipo, dificultad, duracion } = req.body;
    const autor = req.session.user._id;
    // console.log(req.session.user)
    // console.log(req.file, "HOLA")
    //APUNTAR RELACION AUTOR CON ID DE USUARIO
    RecetaModel.create({
      nombre,
      creacion,
      duracion,
      imagen: req.file.path,
      tipo,
      dificultad,
      autor,
    })

      .then((crearReceta) => {
        // console.log(crearReceta, "HOLA")
        res.redirect(`/perfil/${crearReceta._id}/actualizar`);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.get("/:id/actualizar", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  const { nombre, creacion, tipo, dificultad, duracion, autor, ingredientes } =
    req.body;

  RecetaModel.findById(id)
    .then((recetaActualizar) => {
      res.render("recetas/actualizar-receta.hbs", { recetaActualizar });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/:id/actualizar/ingredientes", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  const { ingredientes } = req.body;

  RecetaModel.findByIdAndUpdate(id, {
    $addToSet: { ingredientes },
  })
    .then((actualizarReceta) => {
      res.redirect(`/perfil/${actualizarReceta._id}/actualizar`);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/:id/actualizar/pasos", isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  const { descripcion, numero } = req.body;

//   console.log("LLEGA O QUE", req.body);
  const recipe = await RecetaModel.findById(id);

  // si el numero de paso existe
  let foundPaso = recipe.pasos.find((eachPaso) => {
    console.log(eachPaso.numero, numero);
    return eachPaso.numero == numero;
  });
  if (foundPaso) {
    // si existe, busca en obj de paso dentro del id
    // buscar por id, y buscar por numero de paso existe
    // actualiza
    await RecetaModel.findOneAndUpdate(
      {
        _id: id,
        "pasos.numero": numero,
      },
      {
        $set: {
          "pasos.$.descripcion": descripcion,
        },
      }
    );
  } else {
    // si no existe, agrega numero de paso y descripcion
    await RecetaModel.findByIdAndUpdate(id, {
      $addToSet: { pasos: { numero: numero, descripcion: descripcion } },
      // $addToSet: {"pasos": {numero : numero}},
      // $addToSet: {"pasos": {descripcion: descripcion}}
      // $push:{"pasos": {descripcion: descripcion}}
    });
  }

  res.redirect(`/perfil/${id}/actualizar`);
});



module.exports = router;
