const axios = require('axios');

const getPeliculas = (req, res) => {
    const {anio, ...resto} = req.query;
    console.log(anio, resto);
    
    res.status(200).json({peliculas: 'tales pelis'});
}

const getPelicula = (req, res) => {
    const {id} =  req.params;
    console.log(id);
    
    res.json({pelicula: `Pelicula con ID: ${id}`});
}

const getSeries = (req, res) => {
    res.json({series: 'tales series'});
}

const getOrigenNombre = (req, res) => {
    // const {name} = req.params;

    axios.get(`https://api.unsplash.com/search/photos?query=cabin&client_id=fnF9Fkh3knMKxgEmP0zg_R1ZCJEBGcMCFECd629Fwrw&per_page=10`)
    .then(({data,status,statusText}) => { // Response desestructurado
        res.status(200).json({
            data,
            status,
            statusText,
            // name
        });
    })
    .catch((error) => {
        res.status(400).json({
            err_msg: 'Error inesperado'
        });
    });
}

module.exports = {
    getPeliculas,
    getSeries,
    getPelicula,
    getOrigenNombre
}