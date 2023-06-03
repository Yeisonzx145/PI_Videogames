import Videogames from "../../components/videogames/videogames";
import SearchBar from "../../components/searchBar/searchBar";
import Filtrar from "../../components/filtrar/filtrar";
import style from "./home.module.css"
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { filterGames, fuenteGames, getGames, getGamesName } from '../../redux/actions';
import Ordenar from "../../components/ordenar/ordenar";
import Page from "../../components/page/page";

const Home = ()=>{
    const dispatch = useDispatch();

    const games = useSelector(state=>state.games)
    const gamescopy = useSelector(state=>state.gamescopy)

    //! pages ******************************************************
    const [pageI, setPageI] = useState(0)
    const [pageF,setPageF] = useState(15)

    let paginaAct = gamescopy.slice(pageI,pageF);
    let tamañoArr = gamescopy.length;
    const nexSubmit = ()=>{
        if(pageF <= tamañoArr - 1){
            setPageI(pageF)
            setPageF(pageF + 15)
        }else alert('No quedan paginas')
    }
    const backSubmit = ()=>{
        if(pageI > 1){
            setPageI(pageI - 15);
            setPageF(pageF - 15);
        }else alert('No hay pagina anterior')
    }
    //! Filtros ******************************************************
    const [filter,setFilter] = useState({
        fuente:"",
        orden:"",
    })

    const handleChangeFuente = (event)=>{
        // const property = event.target.name;
        const value = event.target.value;
        setFilter({...filter,fuente:value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        dispatch(fuenteGames(filter.fuente,games,filter.orden))     
        // filterGames(filter.orden,games)
        setFilter({...filter,fuente:''})
    }
//****************   Ordena lo que se renderiza   *********************
    const handleChangeOrden = (event)=>{
        const value = event.target.value;
        setFilter({...filter,orden:value})
    }
    const submitOrdenar =(event)=>{
        event.preventDefault();
        if(filter.orden === '') alert('No has colocado ningun orden')
        filterGames(filter.orden,gamescopy)
        setFilter({...filter,orden:''})
    }
    //! Busqueda por nomnre *****************************************
    const [search,setSearch] = useState('');

    const handleChange = (event)=>{
        let data = event.target.value
        setSearch(data);
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(search === ''){
            setPageI(0)
            setPageF(15)
            dispatch(getGames());
        }else{
            setPageI(0)
            setPageF(15) 
            dispatch(getGamesName(search))
        }
    }
    
    //! AL montarse y desmontar *************************************
    useEffect(()=>{
        dispatch(getGames());
        return(()=>{
            dispatch(getGames());
        })
    },[dispatch]);

    return(
        <div className={style.container}>
            <div className={style.busqueda} ><SearchBar
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            /></div>
            <div className={style.fileter}>
                <Filtrar 
                    handleChangeFuente={handleChangeFuente}
                    submitHandler={submitHandler}
                />
                <Ordenar
                    handleChangeOrden={handleChangeOrden}
                    submitOrdenar={submitOrdenar}
                />
            </div>
            <div className={style.page}>
            <Page
                nexSubmit={nexSubmit}
                backSubmit={backSubmit}
            /></div>
            <div className={style.games} >
                <Videogames games={paginaAct} />
            </div>
        </div>
    )
}
export default Home;
