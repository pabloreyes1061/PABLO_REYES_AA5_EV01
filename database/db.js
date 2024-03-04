//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require('mysql');
const connection = mysql.createConnection({

    //Con variables de entorno cambiar las variables profesor en carpeta env/.env con su base de datos y listo
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE
});

connection.connect((error)=>{
    if (error) {
      console.error('El error de conexión essssss: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos por fin!!!!');
  });

  module.exports = connection;