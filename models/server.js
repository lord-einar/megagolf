const express = require('express')
const cors = require('cors');
const dbConnection = require('../config/db.config');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.conectarDB();
        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

         //CORS
         this.app.use(cors());

         //Lectura y parseo JSON
         this.app.use( express.json() )

         //Carpeta estatica
         this.app.use(express.static('public'));

    }


    routes() {
        this.app.use('/gateras', require('../routes/gateras.routes'))
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }


}

module.exports = Server;