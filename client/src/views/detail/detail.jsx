import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cleanDetail, getGamesId } from "../../redux/actions";
import style from './detail.module.css'
import imgHome from './home.png'

const Detail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const character = useSelector((state)=>state.gamesDetail);

    useEffect(()=>{
        dispatch(getGamesId(id));

        return()=>{
            dispatch(cleanDetail());
        }
    },[id])

    return(
        <div className={style.container} >
            <Link to={`/home`} ><img src={imgHome} className={style.butonhome} alt="Home"/></Link>

            <div className={style.name} >
                <h1>{character.name}</h1>
            </div>
            <div className={style.textdescription}>
                <p dangerouslySetInnerHTML={{__html: character.description}} />
            </div>
            <div className={style.imgCaja}>
                <img src={character.background_image} className={style.img} alt='Imagen descrictiva'/>
            </div>
            <div className={style.plataformas} >
                <label>Platforms: </label>
                <ul>
                {
                    character.plataformas?.map((pla)=>{
                        return(
                            <li>{pla}</li>
                        )
                    })
                }
                </ul>
            </div>
            <div className={style.fecha}>
                <h3>Released: {character.released}</h3>
            </div>
            <div className={style.rating}>
                <h3>Rating: {character.rating}</h3>
            </div>
            <div className={style.genres} >
                <label>Genres: </label>
                <ul>
                {
                    character.generos?.map((pla)=>{
                        return(
                            <li>{pla}</li>
                        )
                    })
                }
                </ul>
            </div>

        </div>
    )

}
export default Detail;