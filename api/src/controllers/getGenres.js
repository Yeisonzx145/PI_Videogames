const axios = require('axios');
require('dotenv').config();
const {key} = process.env;
const {Videogame, Genre} = require('../db')

const getGenres = async ()=>{
    const response = await axios(`https://api.rawg.io/api/genres?key=${key}`)
    const genresApi = response.data.results.map((dat)=>dat.name);

        for(let i=0;i<genresApi.length;i++){
            let name = genresApi[i]
            const newGenres = await Genre.create({name})
        }
    
    return genresApi;
}
module.exports= getGenres;
