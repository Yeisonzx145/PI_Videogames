import style from './filter.module.css'
const Filtrar = ({handleChangeFuente,submitHandler})=>{

    return (
            <form onSubmit={submitHandler} className={style.fil} >
                <div className={style.selc}>
                <select onChange={handleChangeFuente} >
                    <option value=''>-- Default --</option>
                    <option value='API'>API</option>
                    <option value='DB'> Data base</option>
                </select>
                <button className={style.bt} type='submit'>filter</button>
                </div>
            </form>
    )
}
export default Filtrar;