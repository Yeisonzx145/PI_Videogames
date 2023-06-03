import style from './searchBar.module.css'

const SearchBar = ({handleChange,handleSubmit})=>{
return(
    <form onChange={handleChange} className={style.Search}>
        <input className={style.in} />
        <button className={style.bt} onClick={handleSubmit} >Search</button>
    </form>
)
}
export default SearchBar;