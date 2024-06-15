import { useState } from "react";

export default function Tarif({tarif}) {
    const {name, price, speed, color, id} = tarif;
    const [tarifName, setTarifName] = useState('');

    const tarifNameClick = () => {
        setTarifName(
            console.log(`Выбран ${name}`)
        )
    }
    
    let nameClass = [
        'container__name',
        color
    ];
    nameClass = nameClass.join(' ');
    let priceClass = [
        'container__price',
        color
    ];
    priceClass = priceClass.join(' ');
    let containerClass = [
        'container'
    ];
    if (id == 3) {
        containerClass.push('tarif550')
    }
    return (
        <>
        <div className={containerClass.join(' ')}> 
            <p className={nameClass}>{name}</p>
            <div className={priceClass}>
                <div className="container__current">руб</div>
                <div className="container__number">{price} <span className="container__size">/мес</span></div>
            </div>
            <div className="container__speed">до {speed} Мбит/сек</div>
            <div className="container__info">Объем включенного <p>трафика не ограничен</p></div>
            <button onClick={tarifNameClick}>Выбрать</button>
        </div>
        {tarifName}
         </>
         
    )
}
