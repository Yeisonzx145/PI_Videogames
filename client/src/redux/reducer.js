import { GET_GAMES, GET_GAMES_NAME, GET_GAMES_ID, CLEAR_DETAIL, FILTER_GAMES, FUENTE_GAME, GET_GENRES } from "./actions";

const initialState = {
    games:[],
    gamescopy:[],
    gamesDetail:{},
    genres:[]
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_GAMES:
            return {...state, games:action.payload,gamescopy:action.payload}
        case GET_GAMES_NAME:
            return {...state,games:action.payload,gamescopy:action.payload}
        case GET_GAMES_ID:
            return {...state,gamesDetail:action.payload}
        case CLEAR_DETAIL:
            return {...state, gamesDetail:{},genres:[]}
        case FUENTE_GAME:
            return {...state,gamescopy:action.payload}
        case FILTER_GAMES:
            return {...state, gamescopy:action.payload}
        case GET_GENRES:
            return{...state,genres:action.payload}
        default:
            return{...state};
    }
};

export default rootReducer;