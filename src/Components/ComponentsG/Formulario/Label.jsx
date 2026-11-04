import'../../../Styles/EstilosDeOrquestador.css'
export default function Labell ({Titulolabel,Infolabel}){
    return(
        <div>
        <label className='Label' htmlFor={Infolabel}>{Titulolabel}</label> 
        
        </div>
    )
}