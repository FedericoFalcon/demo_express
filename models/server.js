const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;

        this.app = express();

        this.middleware();

        this.routers();
    }

    middleware(){
        this.app.use(cors());
        // Una vez que se configura esta ruta, no es posible utilizar la ruta '/'
        this.app.use(express.static('public'))
    }

    routers(){
        // this.app.get('/', (req, res) =>{
        //     res.send('Hello mundo');
        // })

        this.app.use('/api/v1', require('../routes/demo'))

        this.app.all('*', (req, res) => {
            res.status(404).json({message: '404 Page not found'})
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App escuchando el puerto ${this.port}`);
        });
    }
}

module.exports = Server;