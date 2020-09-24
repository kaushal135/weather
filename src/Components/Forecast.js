import React from 'react';
import Sunny from 'src\Assets\Icons\006-sun.png';

function getIcon(desc){
    return Sunny;
}

function Forecast(props){
    const desc = props.desc;
    const temp = props.temp;

    return(
        <div className="Forecast">
            <div>
                <img src={getIcon(desc)} alt=""/>
                <p>{temp}</p>
            </div>
            <p>{desc}</p>
        </div>
    );
    
}

export default Forecast;