import { Link } from "react-router-dom";
import style from './Nav.module.css'
const Nav = ()=>{
return(
    <div className={style.Contenedor}>
        <Link to={'/home'} className={style.text} ><span>HOME</span></Link>
        <Link to={'/create'} className={style.text}><span>CREATE VIDEOGAME</span></Link>
    </div>
)
}
export default Nav;