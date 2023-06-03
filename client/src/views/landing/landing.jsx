import { Link } from "react-router-dom";
import style from './landing.module.css'
const Landing = () => {
    return(
        <div className={style.Landing}>
            <Link to={`/home`} >
                <button className={style.button}>READY!</button>
            </Link>
        </div>
    )
}
export default Landing;