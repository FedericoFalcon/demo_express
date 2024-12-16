const express = require('express');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();

        this.routers();
    }

    routers(){
        this.app.get('/', (req, res) =>{
            res.send('Hello mundo');
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App escuchando el puerto ${this.port}`);
        });
    }
}

module.exports = Server;