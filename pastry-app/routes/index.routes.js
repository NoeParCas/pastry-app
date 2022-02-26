
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home");
});

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes);

const perfilRoutes = require("./perfil.routes")
router.use("/perfil", perfilRoutes);

module.exports = router;
