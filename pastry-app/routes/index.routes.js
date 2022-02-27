
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home");
});

router.get ("/recetario", (req,res,next)=>{
  res.render("recetas/recetario.hbs")
})
const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes);

const perfilRoutes = require("./perfil.routes")
router.use("/perfil", perfilRoutes);

module.exports = router;
