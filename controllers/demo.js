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

const getNovedades = (req, res) => {
    // const {name} = req.params;

    axios.get(`https://api.unsplash.com/search/photos?query=cabin&client_id=fnF9Fkh3knMKxgEmP0zg_R1ZCJEBGcMCFECd629Fwrw&per_page=10`)
    .then(({data,status,statusText}) => { // Response desestructurado
        const fotos = data.results;

        const nombres = [
            "Cabaña de Ensueño",
            "Cabaña La Linda",
            "Cabaña El Refugio",
            "Cabaña Sol y Luna",
            "Cabaña El Paraíso",
            "Cabaña Los Pinos",
            "Cabaña La Tranquila",
            "Cabaña El Bosque Encantado",
            "Cabaña La Estancia",
            "Cabaña El Valle Secreto"
        ];

        const localidades = [
            "Campana, Buenos Aires",
            "San Miguel de Tucumán, Tucumán",
            "Córdoba, Córdoba",
            "Mendoza, Mendoza",
            "Rosario, Santa Fe",
            "La Plata, Buenos Aires",
            "Mar del Plata, Buenos Aires",
            "San Salvador de Jujuy, Jujuy",
            "Neuquén, Neuquén",
            "Posadas, Misiones"
        ];

        const precios = [
            "$120 USD / noche",
            "$95 USD / noche",
            "$150 USD / noche",
            "$180 USD / noche",
            "$110 USD / noche",
            "$200 USD / noche",
            "$130 USD / noche",
            "$85 USD / noche",
            "$175 USD / noche",
            "$100 USD / noche"
        ];

        var cabanias = [];

        fotos.forEach((foto, index) => {
            cabanias.push({ 'image': foto.urls.small, 'name': nombres[index], 'city': localidades[index], 'price': precios[index] });
        });

        res.status(200).json({
            'novedades': cabanias,
            status,
            statusText
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
    getNovedades
}