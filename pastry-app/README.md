
## PASTRY APP

Description:

This app is for all pastry lovers! As an user you can read,  create, eliminate and comment all the recipes. 
Share your sweet, healthy and gluten free pastry recipes! 
# Functionalities

From your user profile you have all CRUD actions.
You can read and comment recipes. 

# Tech
MongoDB,  handlebars, JavaScript, mongoose, morgan, express, cloudinary, bcrypt and IronLauncher API.

# User stories

- not-found/404 - As a user I want to see a 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- error/500 - As a user I want to see an error page when the super team screws it up so that I know that is not my fault.
- login-signup - As a user I want to see a navbar that gives me the option to either log in as an existing user, or sign up with a new account.
- logout - As a user I can log out form the app and no one can use it.
- home - As a user I want to see a home page with a navbar that shows me all the options.
- perfil-usuario - As a user I wan to see my profile with all the recipes created by me, from there I can delete or update them or create one from scratch.
- recetario - As a user and as an anon is possible to see what kind of recipes are in the platform.
- receta - As an anon you can only see the picture and the ingredients of the recipe,  you will find a message that invites you to join the Pastry community ( login of signup ) for reading the full recipe. As a user you have full access.

# API routes(back-end)

GET /

  render home.hbs
  
GET/auth/signup 

  render singup.hbs

POST/auth/signup

  redirect /perfil

  body: 
    email
    username
    password

GET/auth/login 

  render login.hbs

POST/auth/login 

  redirect /perfil

  body:
    username
    password

POST/auth/logout 

  redirect / (homepage)

  body:  empty

GET/perfil

  render perfil-usuario.hbs

GET/perfil/crear-receta

  render recetas/crear-receta.hbs

POST/perfil/crear-receta

  redirect /perfil/:id/actualizar 

  body:  
    nombre,
    creacion,
    duracion,
    imagen: req.file.path,
    tipo,
    dificultad,
    autor,

GET/perfil/:id/actualizar

  render recetas/actualizar-receta.hbs

POST/perfil/:id/actualizar/ingredientes

  redirect /perfil/:id/actualizar

  body:
    ingredientes

POST/perfil/:id/actualizar/pasos

  redirect /perfil/:id/actualizar

  body: 
    numero
    descripcion

POST/perfil/:id/delete

  redirect /perfil

  body:
    id

GET/perfil/:id/actualizartodo

  render recetas/actualizar-todo.hbs

POST/perfil/:id/actualizartodo

  redirect /recetario/:id/detalles

  body:
    nombre,
    imagen,
    creacion,
    tipo,
    dificultad,
    duracion,
    ingredientes,

GET/recetario

  render recetas/recetario.hbs

GET/recetario/dulce

  render recetas/tipos-recetas.hbs

GET/recetario/sin-gluten

  render recetas/tipos-recetas.hbs

GET/recetario/saludable

  render recetas/tipos-recetas.hbs

GET/recetario/:id/detalles

  render recetas/receta

POST/recetario/:id/detalles

  redirect /recetario/:id/detalles
  
  body:
    comentario,
    autor,
    receta,

# Models

USER MODEL

username{
  type: String,
  unique: true, 
  required: true,
}

password: {
    type: String,
    required: true, 
    }, 

email: {
    type: String,
    unique: true, 
    required: true,
    }, 

timestamps: true,

RECIPE MODEL

nombre: {
    type: String,
    required: true,
  },

  creacion: {
    type: Date,
    default: Date.now,
  },

  tipo: {
    type: String,
    enum: ["Dulce", "Sin-gluten", "Saludable"],
  },

  duracion: {
    type: Number,
  },

  dificultad: {
    type: String,
    enum: ["Alta", "Media", "Baja"],
    
  },

  imagen: {
    type: String,
    required: true, 
  },

  autor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  pasos: [
    {
    numero: {type: Number}, 
    descripcion:{type: String}
    },
  ],

  ingredientes: [{type: String}],

  COMENTARIO MODEL

  comentario: {
    type: String,
    },
   
  receta: {
    type: Schema.Types.ObjectId,
    ref: "Receta",
    },

  autor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    },
    
  fecha: {
    type: Date,
    default: Date.now,
    },

# Git 
https://github.com/NoeParCas/pastry-app

Deployed with Heroku
https://lnkd.in/d4FfdSd8

# Slides

https://docs.google.com/presentation/d/19BJF73zPbn7HQILNeH7GcDgk_oQSzBpShzZMumxG5iE/edit?usp=sharing