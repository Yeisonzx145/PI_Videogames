const axios = require('axios');
require('dotenv').config();
const {key,URL} = process.env;
const {Videogame, Genre} = require('../db')

const idVideoControllers = async (ide,dat)=>{

    if(dat === 'api'){
        const response= await axios.get(`${URL}/${ide}?key=${key}`)
        const {
            id,
            name,
            description,
            platforms,
            background_image,
            released,
            rating,
            genres} = response.data    
        const plataformas = platforms.map(plataf=> plataf.platform.name)
        const generos = genres.map(gen=>gen.name)
        return {
            id,
            name,
            description,
            plataformas,
            background_image,
            released,
            rating,
            generos};
    } else {
        const response = await Videogame.findByPk(ide,{
            include:{
                model: Genre,
                attributes:["name"],
                through:{
                    attributes:[],
                },
            },
        });
        const {
            id,
            name,
            description,
            platforms,
            background_image,
            released,
            rating,
            Genres} = response    
        const generos = Genres.map(gen => gen.name)
        const plataformas = platforms;
        return {
            id,
            name,
            description,
            plataformas,
            background_image,
            released,
            rating,
            generos};
    } 
}
module.exports = idVideoControllers

