import style from './orden.module.css'
const Ordenar = ({handleChangeOrden,submitOrdenar})=>{
    return (
        <form onSubmit={submitOrdenar} className={style.fil} >
            <div className={style.selc}>
            <select onChange={handleChangeOrden}>
                <option value='' >-- Default order --</option>
                <option value='AZ' >alphabetical order(A-Z)</option>
                <option value='ZA' >alphabetical order(Z-A)</option>
                <option value='PG' >Minor to major(rating)</option>
                <option value='GP' >Major to minor(rating)</option>
            </select>
            </div>
            <button className={style.bt} type='submit' >Ordenar</button>
        </form>
    )
}
export default Ordenar;