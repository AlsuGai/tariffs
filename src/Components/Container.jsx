import './Container.scss'
import Tarif from './Tarif'

export default function Container({arrTariffs}) {



    return (
        <main>
            <h1>Выберите свой тариф</h1>
            <div className="content">
                {arrTariffs.map((tarif, id) => (
                    <Tarif key={id} tarif={tarif}/>
                    
                ))}
            </div>
        </main>
    )
}