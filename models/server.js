class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
    }
}



const express = require('express');

const app = express();



app.listen(port, () => {
    console.log(`App escuchando el puerto ${{port}}`);
});

app.get('/', (req, res) =>{
    res.send('Hello mundo');
})