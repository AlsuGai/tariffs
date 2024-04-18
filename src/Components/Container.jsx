export default function Container() {
    return (
        <div className="content">
        <div className="container">
            <p className="container__name color-dark-blue">Безлимитный 300</p>
            <div className="container__price color-blue">
                <div className="container__current">руб</div>
                <div className="container__number">300 <span className="container__size">/мес</span></div>
            </div>
            <div className="container__speed">до 10 Мбит/сек</div>
            <div className="container__info">Объем включенного <p>трафика не ограничен</p></div>
        </div>
        <div className="container">
            <p className="container__name color-dark-green">Безлимитный 450</p>
            <div className="container__price color-green">
                <div className="container__current">руб</div>
                <div className="container__number">450 <span className="container__size">/мес</span></div>
            </div>
            <div className="container__speed">до 50 Мбит/сек</div>
            <div className="container__info">Объем включенного <p>трафика не ограничен</p></div>
        </div>
        <div className="container tarif550">
            <p className="container__name color-dark-red">Безлимитный 550</p>
            <div className="container__price color-red">
                <div className="container__current">руб</div>
                <div className="container__number">550 <span className="container__size">/мес</span></div>
            </div>
            <div className="container__speed">до 100 Мбит/сек</div>
            <div className="container__info">Объем включенного <p>трафика не ограничен</p></div>
        </div>
        <div className="container">
            <p className="container__name color-dark-black">Безлимитный 1000</p>
            <div className="container__price color-black">
                <div className="container__current">руб</div>
                <div className="container__number">1000 <span className="container__size">/мес</span></div>
            </div>
            <div className="container__speed">до 200 Мбит/сек</div>
            <div className="container__info">Объем включенного <p>трафика не ограничен</p></div>
        </div>
        </div>
    )
}