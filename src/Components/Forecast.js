import React from 'react';

function Forecast(props){
    const desc = props.desc;
    const temp = props.temp;
    const imgCode = '01d';
    const imgUrl = `http://openweathermap.org/img/wn/${imgCode}@2x.png`

    return(
        <div className="Forecast">
            <div>
                <img src={imgUrl} alt=""/>
                <p>{temp}</p>
            </div>
            <p>{desc}</p>
        </div>
    );
    
}

export default Forecast;