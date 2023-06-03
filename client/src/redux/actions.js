import axios from 'axios';

const URL = "http://localhost:3001/videogames"
export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_NAME = 'GET_GAMES_NAME';
export const GET_GAMES_ID = 'GET_GAMES_ID';
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const FUENTE_GAME = 'FUENTE_GAME'
export const FILTER_GAMES = 'FILTER_GAMES'
export const GET_GENRES = 'GET_GENRES'

export const getGames = ()=>{
    return async function (dispatch){
        const response = await axios.get(URL);
        const games = response.data;
        return dispatch({type:GET_GAMES,payload:games})
    } 
}

export const getGamesName = (name)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/name?name=${name}`)
        const games = response.data;
        return dispatch({type:GET_GAMES_NAME,payload:games})
    }
}

export const getGamesId = (ide)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/${ide}`)
        const games = response.data;
        return dispatch({type:GET_GAMES_ID,payload:games})
    }
}

export const cleanDetail = ()=>{
    return {type:CLEAR_DETAIL}
}

export const fuenteGames = (fuente,juego)=>{
    return async function (dispatch){
        if(fuente === 'DB'){
            const response = await juego;
            let games=[];
            for(let i=0;i<response.length;i++){
                if(response[i].id.length > 8){
                    games.push(response[i])
                }
            }
            return dispatch({type:FUENTE_GAME,payload:games})

        }else if(fuente === 'API'){
            const response = await juego;
            let games=[];
            for(let i=0;i<response.length;i++){
                if(typeof response[i].id === 'number'){
                    games.push(response[i])
                }
            }
            return dispatch({type:FUENTE_GAME,payload:games})
        }else{
            const games = await juego;
            return dispatch({type:FUENTE_GAME,payload:games})
        }
    }
}

export const filterGames = async (orden,juegos)=>{
    let games = await juegos;

    switch(orden){
        case 'AZ':
            return games.sort((o1,o2)=>{
                if(o1.name < o2.name){
                    return -1;
                }else if(o1.name > o2.name){
                    return 1;
                }else{
                    return 0;
                }
            })
        case 'ZA':
            return games.sort((o1,o2)=>{
                if(o1.name > o2.name){
                    return -1;
                }else if(o1.name < o2.name){
                    return 1;
                }else{
                    return 0;
                }
            })
        case 'PG':
            return games.sort((o1,o2)=>{
                if(o1.rating < o2.rating){
                    return -1;
                }else if(o1.rating > o2.rating){
                    return 1;
                }else{
                    return 0;
                }
            })
        case 'GP':
            return games.sort((o1,o2)=>{
                if(o1.rating > o2.rating){
                    return -1;
                }else if(o1.rating < o2.rating){
                    return 1;
                }else{
                    return 0;
                }
            })
        default: break;
    }
    return {type:FILTER_GAMES,payload:games};   
}

export const getGenres = ()=>{
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/genres');
        const genres = response.data;
        return dispatch({type:GET_GENRES,payload:genres})
    } 
}
