

const recetasArr = [
    {
        nombre:"Galletas de Avena",
        creacion: 22/12/2021,
        tipo:"Saludable",
        duracion: 30,
        dificultad: "Baja",
        imagen: "../../images/recetas-img/galletas-avena-chocolate.jpeg",
        autor: "621a440881abf326ee365317",
        pasos:[
            {numero: 1, descripcion: "Batir la mantequilla con el azúcar."},
            {numero: 2, descripcion: "Añadir los huevos uno a uno y la esencia de vainilla."},
            {numero: 3, descripcion: "Incorporar suavemente la avena, la Maizena, la levadura y la sal."},
            {numero: 4, descripcion: "Mezclar todo hasta conseguir una mezcla uniforme."},
            {numero: 5, descripcion: "Hacer bolitas con las manos, aplastarlas y llevarlas a una bandeja para horno forrada con papel para hornear."},
            {numero: 6, descripcion: "Hornear 15 minutos a fuego medio o hasta que empiecen a dorarse los bordes."},
            {numero: 7, descripcion: "Decorar con chocolate derretido, dejar enfriar y servir."},
        ],
        ingredientes: ["110 gramos azúcar", "50 gramos mantequilla", "2 huevos", "2 tazas copos de avena finos", "1/2 taza Maizena", "2 cucharadita(s) levadura", "esencia de vainilla", "1 Pizca sal", "chocolate para cobertura" ]
    },
    {
        nombre:"Crepes versión Light",
        creacion: 15/08/2021,
        tipo:"Saludable",
        duracion: 40,
        dificultad: "Baja",
        imagen: "../../images/recetas-img/crepes-light.jpeg",
        autor: "621a440881abf326ee365317",
        pasos:[
            {numero: 1, descripcion:"Mezcla la harina con el edulcorante (si se quiere dulce), los huevos y la mitad de la leche. Remueve bien y después ve añadiendo poco a poco el resto de la leche y finalmente el AOVE y la ralladura de limón (si se desea). Deja reposar la mezcla entre 20-30min bien tapada."},
            {numero: 2, descripcion: "Pinta el fondo de la sartén con el AOVE con la ayuda de un pincel de cocina o un trozo de papel absorbente para evitar poner demasiado aceite. Verte un poco de la mezcla de tal manera que cubra el fondo de la sartén."},
            {numero: 3, descripcion: "Cuando los bordes se hayan hecho y empiece a estar algo más consistente la mezcla se le da la vuelta y se espera a que se haga por el otro lado antes de sacarla."},
            {numero: 4, descripcion: "Puedes rellenar la crepe con Nutella Fitness, mermelada light de cualquier sabor, miel o sola. Y a disfrurar!"}
        ],
        ingredientes: ["140gr de harina integral", "1 cucharada de edulcorante líquido o en polvo (opcional)", "2 huevos", "280ml de leche desnatada o vegetal sin azúcar", "Aceite de Oliva Virgen Extra", "Ralladura de limón o naranja (opcional)"]
    },
    {
        nombre:"Muffins de Arándanos",
        creacion:30/04/2021,
        tipo:"Saludable",
        duracion: 30,
        dificultad: "Baja",
        imagen: "../../images/recetas-img/muffin-arandanos.jpeg",
        autor: "621a440881abf326ee365317",
        pasos:[
            {numero: 1, descripcion: "Precalentar el horno a 200°C."},
            {numero: 2, descripcion: "Mezclar en el bol los ingredientes secos para la masa."},
            {numero: 3, descripcion: "Batir el huevo y la nata hasta integrarlos. Añade la mantequilla derretida (pero no ardiente)."},
            {numero: 4, descripcion: "Añade a la mezcla los ingredientes secos y batir todo hasta que quede una masa homogénea."},
            {numero: 5, descripcion: "Verter en los moldes para muffins y decorar con los arándanos."},
            {numero: 6, descripcion: "Hornear por 20 minutos hasta que se comiencen a dorar."}
        ],
        ingredientes: ["120gr de harina de almendras", "40gr de Estevia", "2 cucharadas de levedura en polvo", "1 pizca de sal", "25gr de mantequilla", "100ml de nata baja en grasa", "2 huevos", "60gr de arándanos"]
    },
    {
        nombre:"Tarta de Queso",
        creacion:30/01/2022,
        tipo:"Sin gluten",
        duracion: 60,
        dificultad: "Media",
        imagen: "../../images/recetas-img/tartadequesosingluten.jpeg",
        autor: "621a440881abf326ee365316",
        pasos:[
            {numero: 1, descripcion: "Tritura las galletas con la ayuda de un mortero ó picadora y mezcla con los 20 gramos de mantequilla derretida. Mezcla bien hasta conseguir una textura como de arena mojada y cubre el fondo de los tarros presionando para que compacte bien. Reserva en la nevera."},
            {numero: 2, descripcion: "En un cazo pon el queso crema, la nata, el azúcar y los sobres de cuajada. Tritura con la ayuda de la batidora o “túrmix” y lleva al fuego a calentar removiendo constantemente y sin que llegue a hervir a fuego medio-alto."},
            {numero: 3, descripcion: "Cuando esté a punto de hervir saca el cazo del fuego y rellena los tarros que tenías guardados en la nevera con cuidado. Dale unos golpecitos para que la mezcla se reparta y déjalos templar a temperatura ambiente. Una vez fríos mételos en la nevera mínimo 6 horas."},
            {numero: 4, descripcion: "En el momento de servir la tarta de queso echa una cucharada de mermelada de frutos rojos, higos, arándanos… La que más te guste!"}
        ],
        ingredientes: ["400gr de queso crema no light", "300ml de nata líquida con un 35% de materia grasa", "120gr de azúcar", " 2 sobres para hacer cuajada sin gluten", "20 de tus galletas sin gluten preferidas", "20gr de mantequilla", "mermelada para decorar"]
    },
    {
        nombre:"Brownie sin gluten",
        creacion:25/02/2022,
        tipo:"Sin gluten",
        duracion: 60,
        dificultad: "Media",
        imagen: "../../images/recetas-img/brownie.jpeg",
        autor: "621a440881abf326ee365317",
        pasos:[
            {numero: 1, descripcion: "Derrite la mantequilla con el chocolate a fuego suave."},
            {numero: 2, descripcion: "Bate los huevos con el azúcar hasta que el azúcar se mezcle bien y añade el chocolate, y luego la harina de arroz y el cacao."},
            {numero: 3, descripcion: "El último paso es incorporar las nueces picadas."},
            {numero: 4, descripcion: "Coloca en una placa para horno o en un molde cuadrado, forrándolo previamente con papel sulfurizado, y hornea a fuego medio (180ºC) hasta que esté cocido en su interior durante unos 30 minutos. Una vez pasado el tiempo pinchamos con un palillo en el centro para ver si sale limpio, momento en el que podemos retirar del horno."},
        ],
        ingredientes: ["225gr de chocolate fondant sin gluten,  negro o con leche", "150gr de azúcar", "85gr de mantequilla", "2 huevos", "5gr de cacao en polvo sin gluten", "30gr de harina de arroz sin gluten", "140gr de nueces picadas"]
    },
    {
        nombre:"Flan de Queso y Miel",
        creacion:01/02/2022,
        tipo:"Sin gluten",
        duracion: 60,
        dificultad: "Media",
        imagen: "../../images/recetas-img/flan-queso-miel.jpeg",
        autor:"621a440881abf326ee365316",
        pasos:[
            {numero: 1, descripcion: "Para el caramelo, pon el azúcar a fundir en una sartén con unas gotas de agua y vinagre. Cuando se funda y coja un poco de color, viértelo sobre el molde (reservando un poco) y espárcelo bien."},
            {numero: 2, descripcion: "Al caramelo sobrante, añade unas fresas limpias y picadas. Cuando se embadurnen, añade el chorrito de vinagre. Dale un hervor, retira a un bol y reserva."},
            {numero: 3, descripcion: "Para hacer el flan, mezcla los huevos batidos y el queso. Mezcla bien y sigue añadiendo la leche condensada, la miel y la leche. Mezcla todo bien y vierte la preparación en el molde. Cocina en el horno al baño maría a 165º durante unos 40 minutos. Deja enfriar antes de desmoldar."},
            {numero: 4, descripcion: "Monta la nata ligeramente con unas varillas. Desmolda el flan de queso y miel y sirve acompañado de las fresas y la nata. Adorna con unas hojas de menta."},
        ],
        ingredientes: ["300 gr. de leche condensada", "1 cucharada de miel", "4 huevos","1/4 l. de leche", "unas gotas de vinagre de Módena", "un chorrito de nata", "250 gr. de queso cremoso de untar", "4 cucharadas de azúcar", "10 fresas", "1 chorrito de agua", "hojas de menta"]
    },
    {
        nombre:"Tartaleta de Frambuesa",
        creacion:15/01/2022,
        tipo:"Dulce",
        duracion: 90,
        dificultad: "Media",
        imagen: "../../images/recetas-img/tartaleta-frambuesa.jpeg",
        autor: "621a440881abf326ee365316",
        pasos:[
            {numero: 1, descripcion: "Crema pastelera:Poner a hervir la leche con la vaina de vainilla. Mientras, poner las yemas en un bol y mezclar con el azúcar. Batir bien con las varillas hasta que empiece a aclararse el color. Añadir la maizena y mezclar."},
            {numero: 2, descripcion: "Una vez que la leche está infusionada suficientemente de vainilla, retiraremos la vaina y añadiremos poco a poco a la mezcla de yemas."},
            {numero: 3, descripcion: "Después lo pondremos todo junto de nuevo en la cacerola a fuego medio sin parar de mezclar con una cuchara de madera hasta que espese.Esta etapa puede durar al menos 10 min.Tapar con film transparente. Dejar enfriar"},
            {numero: 4, descripcion: "Estira la masa sablé, y con la ayuda de un bol, corta 4 círculos de masa."},
            {numero: 5, descripcion: "Cubre los moldes con la base de sablé (previamente engrasados en mantequilla). Pinchar con un tenedor el fondo.Refrigerar durante 30 min y después hornear 20 min a 180°C."},
            {numero: 6, descripcion: "Una vez que el fondo de las tartaletas y la crema pastelera están fríos, aplicaremos una generosa capa de crema pastelera en cada tartaleta."},
            {numero: 7, descripcion: "Coloca de la mejor manera las frambuesas y espolvorear azúcar glas por encima. Y listo!!!"}
        ],
        ingredientes: ["1 rulo de masa sablé", "250ml de leche", "1 vaina de vainilla", "2 yemas", "60gr de azúcar", "20gr maizena", "250gr de frambuesas", "azúcar glass"]
    },
    {
        nombre:"Tarta de Zanahoria",
        creacion:11/11/2021,
        tipo:"Dulce",
        duracion: 180,
        dificultad: "Alta",
        imagen: "../../images/recetas-img/tarta-zanahoria.jpeg",
        autor: "621a440881abf326ee365317",
        pasos:[
            // {numero: 1, descripcion: "Vamos a empezar por los bizcochos, para ello lavamos muy bien las zanahorias. Secamos y picamos hasta que queden en trocitos muy pequeñitos. Si no tenéis la picadora de la batidora tendréis que hacerlo a mano. Reservamos."},
            {numero: 1, descripcion: "Vamos a empezar por los bizcochos, para ello lavamos muy bien las zanahorias. Secamos y picamos hasta que queden en trocitos muy pequeñitos. Si no tenéis la picadora de la batidora tendréis que hacerlo a mano. Reservamos."},
            {numero: 2, descripcion: "Mezclamos por un lado los ingredientes secos. Tamizamos la harina, el bicarbonato, la levadura en polvo y las especias (canela, el clavo, la nuez moscada y jengibre) en un recipiente grande."},
            {numero: 3, descripcion: "Después añadimos el azúcar moreno y los huevos en otro bol y batimos hasta que se forme espuma. Incorporamos una mezcla de un bol a otro, añadimos la zanahoria y la mantequilla que hemos derretido en el microondas. Mezclamos hasta que quede una masa homogénea."},
            {numero: 4, descripcion: "Metemos el molde en la bandeja media del horno a 180º C con calor arriba y abajo. El tiempo de cocción será  aproximadamente de 60-70 minutos, o hasta que lo pinchemos con un tenedor y veamos que sale limpio. Cuando lleve 30 minutos en el horno (se verá que ya tiene un poco de costra, que empieza a cuajar) ponemos un poquito de papel de aluminio para tapar la superficie y evitar que se nos queme. Los últimos 5-8 minutos la dejamos destapada para que pille color."},
            {numero: 5, descripcion: "Una vez transcurrido el tiempo, sacamos el bizcocho y lo dejamos enfriar en el molde sin desmoldar durante unos 10 minutos, para posteriormente pasarlo al plato donde lo vayamos a presentar con la crema de queso. Lo dejamos enfriar sobre una rejilla de horno."},
            {numero: 6, descripcion: "Vamos a preparar la cobertura, no es más que un buttercream. Es muy sencilla, ya la habéis visto en el blog en varias ocasiones y que además nos vale de relleno."},
            {numero: 7, descripcion: "Mezclamos la mantequilla, que estará a temperatura ambiente con el queso Mascarpone y la esencia de vainilla, cuando estén mezclados, añadimos el azúcar. Montamos la nata y la incorporamos a la mezcla anterior con movimientos envolventes."},
            {numero: 8, descripcion: "Cortamos el bizcocho en tres bases, si creéis que se os va a romper, lo cortáis directamente por el centro. Rellenamos con la cobertura primero en una de las bases de bizcocho. Colocamos la otra mitad del bizcocho encima y procedemos a cubrir con otra capa y otra base de bizcocho."},
            {numero: 9, descripcion: "Luego vamos con la tarta entera, primero una capa finita para eliminar las migas que salgan. Para cubrir la tarta finalmente, necesitaremos dejarla enfriar en la nevera como mínimo 1 hora. Sacamos de la nevera y le ponemos una capa más gordita con la ayuda de una espátula. Repasamos toda la superficie y esparcimos unos pocos frutos secos (los que más os gusten) por encima. En caso de que hagamos un layer cake y también necesitemos cobertura para rellenar el pastel, tendremos que doblar la cantidad."},
        ],
        ingredientes: ["280gr de harina", "350gr de zanahoria", "4 huevos", "300gr de azúcar moreno", "250gr de mantequilla", "1 cucharadita de: canela molida, esencia vainilla, jengibre molido y nuez moscada", "4 clavos de olor machacados", "1 cucharadita de bicarbonato sódico", "2 cucharadas de levadura química", "1 pizca de sal", "300gr queso mascarpone", "300ml de nata para montar", "250gr de azúcar", "50gr de mantequilla", "1/2 cucharada de extracto de vainilla"]
    },
    {
        nombre:"Bizcocho Chocolate - 23cm de diámetro",
        creacion:12/08/2021,
        tipo:"Dulce",
        duracion: 50,
        dificultad: "Media",
        imagen: "../../images/recetas-img/bizcocho-chocolate.jpeg",
        autor: "621a440881abf326ee365316",
        pasos:[
            {numero: 1, descripcion: "Vacía el yogur en un pequeño bol para poder utilizar su recipiente desde el primer momento."},
            {numero: 2, descripcion: "Precalienta el horno a 180º durante estos 1o minutos que vas a dedicar aproximadamente a elaborar la masa."},
            {numero: 3, descripcion: "En un bol grande, añade las dos medidas de azúcar y los huevos, y bátelos enérgitamente, mejor con unas varillas o una cuchara."},
            {numero: 4, descripcion: "Añade el aceite y el yogur, y sigue batiendo para que la mezcla quede homogénea, sin grumos."},
            {numero: 5, descripcion: "Ahora, sitúa un colador justo encima del bol y ve añadiendo las medidas de levadura y harina, de forma que pasen por el colador. A este proceso se le llama tamizado, y permite que estos ingredientes secos se añadan a la mezcla sin grumos ni apelmazamientos, viene genial para que todo se mezcle bien. Termina de mezclarlo todo, que queden perfectamente integrados todos los ingredientes."},
            {numero: 6, descripcion: "Añade la cantidad elegida de cacao, y mezcla bien con el resto de ingredientes. Verás que tu bizcocho tomará automáticamente un color muy oscuro, y si pruebas la mezcla un poco con el dedo (qué gustazo poder probar las mezclas antes de hornear!) verás qué rico está. Puedes ayudarte de esta pequeña prueba para saber si has acertado con la cantidad de cacao."},
            {numero: 7, descripcion: "Unta el molde con mantequilla. Puedes hacerlo con tu propio dedo, y es recomendable que la mantequilla haya estado unos minutos fuera de la nevera, o si está demasiado dura, introduce una pequeña cantidad de ella en un vaso en el microondas durante apenas 5 segundos, y ya la tendrás lista para impregnar las paredes del molde con facilidad."},
            {numero: 8, descripcion: "Vierte la masa en el molde y colócalo en el horno, a una altura media, y mantén esa temperatura de 180º durante unos 30 minutos."},
            {numero: 9, descripcion: "Haz la prueba del palillo: pincha con un palillo el bizcocho, y si sale sin restos pegados, es que está listo. Apaga el horno, saca el bizcocho y déjalo reposar."},
        ],
        ingredientes: ["1 yogur natural (de 125 gr)", "3 huevos", "Harina (2 medidas de yogur)", "Cacao en polvo (1 medida de yogur)", "Azúcar (2 medidas de yogur)", "Aceite de semillas y de oliva (1 medida de yogur entre los dos). Si te gusta que en el sabor final se aprecie el aceite, añade más aceite de oliva que de semillas, pero si prefieres que sea más discreto, hazlo a la inversa", "1 sobre de levadura química o polvos de hornear (16 gr)", "Mantequilla para untar el molde"]
    }
];

const Receta = require("../models/Receta.model")

const mongoose = require("mongoose");

const MONGO_URI = require("../utils/consts");

mongoose.connect(MONGO_URI)
.then((response) => {
    console.log("CONECTADOS!!!!")
    return Receta.insertMany(recetasArr)
})
.then((response) => {
    console.log("RECETAS AÑADIDAS CORRECTAMENTE")
    mongoose.connection.close()
})
.catch((err) => {
    console.log(err)
})