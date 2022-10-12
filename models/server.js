const express = require('express');
const cors = require('cors');
const connectDB = require('../database/connection');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.app.use(express.json());
        connectDB();
        //this.paths={};
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        //    this.app.use(this.paths,require('../routes/routes.js');
        this.app.use(require('../routes/routes.js'));

    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;