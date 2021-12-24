const mongoose = require('mongoose');

class Connection {

    constructor() {
        this.dbConnectMongoDB();
    }

    dbConnectMongoDB() {
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/api-nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão estabelicida com o MongoDB");
        }).catch((error) => {
            console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
        });
    }

    // dbConnectMySQL(){

    // }

    // dbConnectPostGreSQL(){

    // }
}

module.exports = new Connection();