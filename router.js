// cargar los modulos a usar
const express = require('express');
const mysql = require('mysql');
const path = require('path');

// Iniciar las rutas que vamos a usar
const router = express.Router();

// Coneccion a la Base de Datos
const connection = mysql.createConnection ( {
    host: 'localhost',
    user: 'cief',
    password:  '123456',
    database: 'cars',
})


// sendFile para los ficheros estaticos, el render para ls plantillas

router.get('/', (req, res) => {
  const selectAll = "SELECT * FROM modelos"
  connection.query(selectAll, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      res.render('index', {h2 : "Our wonderful cars", results})
    }
  })
  // res.render('index', {h2 : "Our wonderful cars"});
})


module.exports = router;