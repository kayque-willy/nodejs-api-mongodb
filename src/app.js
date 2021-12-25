const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const routes = require("./routes");
require('./app/config/Connection');

class App {

    constructor() {
        this.app = express();
        this.middleWares();
        this.routes();
    }

    middleWares() {
        // BodyParser json
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        // Middleware 
        this.app.use((req, res, next) => {
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "GET", "POST", "PUT", "DELETE");
            res.header("Access-Controll-Allow-Headers", "Content-type", "Authorization", "Acept", "Origin", "X-Request-with");
            this.app.use(cors());
            next();
        });
    }

    routes() {
        this.app.use("/api", routes);
    }

}

module.exports = new App().app;