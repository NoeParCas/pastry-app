README: 
## PASTRY APP. 

Descripción: 

Esta app pretende reunir todos aquellos que disfruten de los dulces. Puedes consultar recetas, crearlas y comentarlas.
Compartela tus dulces favoritos, saludables y sin gluten! Para que todos puedan disfrutar de los postres. 

# Funcionalidades: 

Puedes crear, modificar y actualizar tus recetas desde tu perfil. 
Puedes consultar todas las recetas que quieras, y comentarlas! 

Desarrollo: 

Tech: 
MongoDB,  handlebars, JavaScript, mongoose, morgan, express, cloudinary, bcrypt and IronLauncher API.

# Rutas API (back-end): 

GET /
  render home.hbs
  
GET/auth/signup 
  redireccionana a POST /auth/signup
  render de singup.hbs

POST/auth/signup 
  redirecciona a /perfil
  body: 
    email
    username
    password
 
GET auth/
  
/perfil
/recetario

Auth routes: (/auth)

/login (get, post)
/signup (get, post)
/logOut (get)

Perfil routes: (/perfil)

/perfil
/crear-receta
/crear-receta

/:id/actualizar

Link 


Git 