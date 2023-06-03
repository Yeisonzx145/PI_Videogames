const {Videogame, Genre} = require('../db')

const createVideoControllers = async ( name,description,platforms,
    background_image,released,rating, genres )=>{

    const newVideogame = await Videogame.create({name,description,platforms,
        background_image,released,rating })

    newVideogame.addGenres(genres);
    
    return newVideogame;

}
module.exports = createVideoControllers;
