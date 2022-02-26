const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn")

router.get('/',isLoggedIn,(req, res, next) =>{

    res.render("perfil/perfil-usuario.hbs")  
})

module.exports = router;