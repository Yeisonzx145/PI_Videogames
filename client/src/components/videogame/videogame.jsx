import { Link } from "react-router-dom";
import style from './videogame.module.css';
import estrella from './estrella.png'

const Videogame = ({id,name,image,generos,rating})=>{
    return(
        <Link to={`/detail/${id}`} className={style.Link} ><div className={style.Contenedor}>
            <div className={style.ImageContenedor}>
                <img src={image} alt="" className={style.image} />
            </div>
            <div className={style.textnameC}>
                <h2 className={style.textname} >{name}</h2>
            </div>

            <ul className={style.genresC}>
                {
                    generos.map(gen =>{
                        return (
                            <li className={style.genres} key={Math.random()}>{gen}</li>
                            )
                        })
                    }
            </ul>

            <div className={style.ratingC}>
                <img className={style.imgEstrella} alt="" src={estrella} />
                <span className={style.rating}>{rating}</span>
            </div>
        </div></Link>
    )
}
export default Videogame;