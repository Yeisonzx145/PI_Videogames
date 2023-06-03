import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { useEffect, useState } from "react";
import { getGenres } from "../../redux/actions";
import { cleanDetail } from "../../redux/actions";
import Videogame from '../../components/videogame/videogame'
import style from './create.module.css'
import axios from "axios";

const Create = ()=>{
    let i=0;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGenres());

        return ()=>{
            dispatch(cleanDetail());
        }
    },[dispatch])

    const genre = useSelector((state)=> state.genres)

    const [data,setData] = useState({
        name:'',
        description:'',
        platforms:[],
        background_image:'',
        released:'',
        rating:0,
        genres:[],
    })
    const [errors,setErrors] = useState({
        name:'',
        description:'',
        platforms:[],
        background_image:'',
        released:'',
        rating:0,
        genres:[],
    })
    const handleInputChange = (event)=>{
        const property = event.target.name;
        let value = event.target.value;
        if(property === 'rating'){
            value = parseInt(value);
        }
        setData({...data,[property]:value})
        setErrors(validation({ ...data, [property]: value }, errors,))
    }
    const addGenres = (event)=>{
        const property = event.target.checked;
        const value = parseFloat(event.target.value)

        if(property){
            setData({...data,genres:[...data.genres,value]})
            setErrors(validation({...data,genres:[...data.genres,value]},errors))
        }else{
            setData({...data,genres:data.genres.filter((gen)=> gen !== value)})
            setErrors(validation({...data,genres:data.genres.filter((gen)=> gen !== value)},errors))
        }
    }
    const addPlatafor = (event)=>{
        const value = event.target.value
        setData({...data,platforms:[value]})
        setErrors(validation({...data,platforms:[value]},errors))
    }
    const sendGame = (event)=>{
        event.preventDefault();
        if(errors.name === '' && errors.description === '' && errors.background_image === '' && errors.platforms === '' && errors.released === '' && errors.rating === '' && errors.genres === ''){
            axios.post('http://localhost:3001/videogames',data)
            .then(res=>alert(res.data))
            .catch(err=>alert(err))
        }else{
            alert('Faltan datos requeridos')
        }
    }
    return (
        <form onSubmit={sendGame} className={style.conteiner} >
            <h1>Register your video game</h1>

            <div className={style.name} ><label htmlFor="name" >Name </label>
            <input type='text' name='name' 
            value={data.name} onChange={handleInputChange}
            /><span>{errors.name}</span></div>

            <div className={style.desc}><label htmlFor="description" className={style.descL}>Description: </label>
            <input type='text' name='description' className={style.descI}
            value={data.description} onChange={handleInputChange}
            /><span className={style.descS}>{errors.description}</span></div>

            <div className={style.platf}><label>Platforms: </label>
            <input type="text" name="platforms" value={data.platforms} onChange={addPlatafor} />
            <span className={style.platfS}>{errors.platforms}</span></div>

            <div className={style.img}><label>Imagen: </label>
            <input type='url' name="background_image"
            value={data.background_image} onChange={handleInputChange}
            /><span>{errors.background_image}</span></div>

            <div className={style.vistaP}>
                <Videogame
                    name={data.name}
                    image={data.background_image}
                    generos={[data.platforms[0],data.released,'PREVIEW']}
                    rating={data.rating}
                />
            </div>

            <div className={style.fecha}><label>Released: </label>
            <input type='date' name="released"
            value={data.released} onChange={handleInputChange}
            /><span>{errors.released}</span></div>

            <div className={style.rating}><label>Rating: </label>
            <input type='number' name="rating"
            value={data.rating} onChange={handleInputChange}
            /><span>{errors.rating === 0 ? '':errors.rating}</span></div>

            <div className={style.genres}>
            <label className={style.gen} >Genres: </label>
                {
                    genre.map(gen=>{
                        i++
                        return (
                            <div key={i} className={style.genre} >
                                <label>{gen}</label>
                                <input type='checkbox' onClick={(event)=>addGenres(event)}
                                value={i} name="genres" ></input>
                            </div>
                        )
                    })
                }<span>{errors.genres}</span>
            </div>

            <div className={style.bt}><button type='submit' >Submit</button></div>
        </form>
    )
}
export default Create;