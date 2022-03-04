const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const RecetaModel = require("../models/Receta.model");
const uploader = require("../middleware/uploader");
const { findByIdAndDelete } = require("../models/User.model");

router.get("/", isLoggedIn, (req, res, next) => {
  const name = req.session.user.username;

  RecetaModel.find({ autor: req.session.user._id }).then((recetas) => {
    res.render("perfil/perfil-usuario.hbs", { recetas, name }); //
  });
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
    console.log(tipo);
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
        res.redirect(`/perfil/${crearReceta._id}/actualizar`);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.get("/:id/actualizar", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

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

  const recipe = await RecetaModel.findById(id);

  // si el numero de paso existe
  let foundPaso = recipe.pasos.find((eachPaso) => {
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


router.post("/:id/delete", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;

    await RecetaModel.findByIdAndDelete(id);
    res.redirect("/perfil");
  } catch (err) {
    next(err);
  }
}),
  router.get("/:id/actualizartodo", isLoggedIn, async (req, res, next) => {
    try {
      const { id } = req.params;
      const recetaActualizarTodo = await RecetaModel.findById(id);
      res.render("recetas/actualizar-todo.hbs", { recetaActualizarTodo });
    } catch (err) {
      next(err);
    }
  });

router.post("/:id/actualizartodo", isLoggedIn, async (req, res, next) => {
  try {
    const {
      nombre,
      imagen,
      creacion,
      tipo,
      dificultad,
      duracion,
      pasos,
      descripcion,
      numero,
      ingredientes,
    } = req.body;
    const { id } = req.params;

    // Si  hay más de un paso => entonces bucle
    if (numero.length > 1) {
      //iteramos por la array que nos llega del input "name: numero"
      for (let i = 0; i < numero.length; i++) {
        await RecetaModel.findOneAndUpdate(
          {
            _id: id,

            //accedo a la propiedad
            "pasos.numero": numero[i],
          },
          {
            $set: {
              //Con el símbolo ($) indico la propiedad a la que he accedido.
              // Después modifico
              "pasos.$.descripcion": descripcion[i],
            },
          }
        );
      }
      // Si  hay un paso => entonces actualiza directamente
    } else {
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
    }

    //actualizar la receta

    await RecetaModel.findByIdAndUpdate(id, {
      nombre,
      imagen,
      creacion,
      tipo,
      dificultad,
      duracion,
      ingredientes,
    });
    res.redirect(`/recetario/${id}/detalles`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
