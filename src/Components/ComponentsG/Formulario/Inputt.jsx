import'../../../Styles/EstilosDeOrquestador.css'

export default function Input({Type, Nombre, Infolabel}){
    return(
        <div>
            <input type={Type} id={Infolabel} name={Nombre} />

        </div>

    )


}