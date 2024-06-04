// Cargar los modulos que vamos a usar
const express = require('express');
// const bodyParser = require('body-parser'); no se usara porque en su lugar el mismo express hace su funcion
const router = require('./router.js');

const app = express();

// indicamos el puerto de la coneccion ---
const PORT = process.env.PORT || 3000;

// definimos el motor de plantillas
app.set('view engine', 'ejs');

// configuramos el bodyparser usado para: convertir el SELECT en objetos que se pueden introducir en el array
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());   ---> esta es la forma anterior, pero se hace con una nueva forma que es la siguiente, asi ahorrandonos e traer el BODY-PARSER, a nuestra app y asi hacerlo directamente con express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// utilizar las rutas del fichero router.js
app.use(router)

//Definir que hacer en caso de -----ERROR-----

// definir la carpeta de los ficheros estaticos


// el puerto en el que se va a escuchar
app.listen(PORT, () => console.log(`hola, ya estoy conectado en el servidos http://localhost:${PORT}`));