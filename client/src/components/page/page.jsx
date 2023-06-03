import style from './page.module.css'
const Page = ({nexSubmit,backSubmit})=>{
return (
<div className={style.conteiner} >
    <button className={style.bt1} onClick={backSubmit}>Back</button>
    <button className={style.bt2} onClick={nexSubmit}>Nex</button>    
</div>
)
}
export default Page;