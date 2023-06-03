const axios = require('axios');
require('dotenv').config();
const {key,URL} = process.env;
const {Videogame,Genre} = require('../db')

const getVideogControllers = async () =>{
   
   const newArry = []

   let urls = `${URL}?key=${key}`
   for(let i=0;i<6;i++){
      const response = await axios.get(urls)
      const datos = response.data.results.map((dat)=> {
         const {id,name,background_image,genres,rating} = dat
         const generos = genres.map(gen => gen.name)
         newArry.push({id,name,background_image,generos,rating})
      })
      urls = response.data.next
   }

   const responseBd = await Videogame.findAll({
      include:{
         model: Genre,
         attributes:["name"],
         through:{
            attributes:[]
         }
      }
   });
   for(let i = 0; i<responseBd.length; i++){
      const {id,name,background_image,rating,Genres} = responseBd[i];
      const generos = Genres.map(gen => gen.name)
      newArry.push({id,name,background_image,rating,generos});
   }

   return newArry;

   
}
module.exports = getVideogControllers;
