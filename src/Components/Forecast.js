import React from 'react';

function Forecast(props){
    //get the data from props
    const result = props.res;
    const unit = props.unit;      

    return(
        <div> 
            {/* If the result.main (the json which holds the temprature data) 
            is not undefined then display the Forecast otherwise show empty string */}
            {(typeof result.main != "undefined") ? (
                <div className="Forecast">
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} alt=""/>
                        <p>{Math.round(result.main.temp)}°{unit}</p>
                    </div>
                    <p>{result.weather[0].description}</p>
                </div>
            ) : ('')}
        </div>
    );
}

export default Forecast;