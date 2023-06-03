//! Controladores requeridos
const idVideoControllers = require('../controllers/idVideoControllers')
const createVideoControllers = require('../controllers/createVideoControllers')
const getVideogControllers = require('../controllers/getVideogControllers')
const videogNameQuery = require('../controllers/videogNameQuery')

//? Por nombre
const getNameVideog = async (req,res)=>{
    const {name} = req.query;
    try {
        if(name){
            const response = await videogNameQuery(name);
            res.status(200).json(response)
        }else {
            res.status(200).send('No se agrego ningun nombre')
        }

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//? todos los juegos 
const getVideog = async (req,res)=>{
    try {
        const respose = await getVideogControllers()
        res.status(200).json(respose)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//? Por ID 
const getIdVideog = async (req,res)=>{
    const {idVideogame} = req.params
    const dat = isNaN(idVideogame) ? 'bd' : 'api' 
    try {
        const respose = await idVideoControllers(idVideogame,dat);
        res.status(200).json(respose)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//* Para agragar a la base de datos 
const createVideog = async (req,res)=>{
    const {name,description,platforms,
        background_image,released,rating,genres} = req.body
    try {
        const response = await createVideoControllers(name,description,platforms,
            background_image,released,rating,genres)
        res.status(200).send('Successfully added')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getNameVideog,
    getVideog,
    getIdVideog,
    createVideog
}