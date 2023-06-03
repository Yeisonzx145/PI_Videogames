import Videogame from '../videogame/videogame';
import style from './videogames.module.css'

const Videogames = ({games})=>{
    
    return(
        <div className={style.Container} >
            {
                games[0]?(games.map(({id,name,background_image,generos,rating})=>{
                    return(
                        <Videogame
                            key={id}
                            id={id}
                            name={name}
                            image={background_image}
                            generos={generos}
                            rating={rating}
                        />
                    )
                })):(
                   
                    <img className={style.carga} src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif'/>
                    
                )
            }
        </div>
    )
}
export default Videogames;