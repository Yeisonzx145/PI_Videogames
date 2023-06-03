const axios = require('axios');
require('dotenv').config();
const {key,URL} = process.env;
const {Videogame,Genre} = require('../db');
const {Op} = require('sequelize')


const videogNameQuery = async (nameQuery)=>{
    const newArr = []
    const response = await axios(`${URL}?search=${nameQuery}&key=${key}`)

    for(let i = 0; i < 15; i++){
        const {id,
            name,
            background_image,
            genres,
            rating} = response.data.results[i];
            const generos = genres.map(gen => gen.name)
            newArr.push({id,name,background_image,generos,rating})   
    }

const responseDb = await Videogame.findAll({
    where:{
        name:{
        [Op.iLike]:`%${nameQuery}%` 
        }
    },
    include:{
        model: Genre,
        attributes:["name"],
        through:{
            attributes:[],
        },
    },
});

if(responseDb.length){
    for(let i = 0; i<responseDb.length; i++){
        const {id,name,background_image,rating,Genres} = responseDb[i];
        const generos = Genres.map(gen => gen.name)
        newArr.push({id,name,background_image,rating,generos});
     }
}
    return newArr;
}
module.exports = videogNameQuery;

