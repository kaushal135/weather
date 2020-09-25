import React, {useState} from 'react';
import Forecast from './Components/Forecast.js';
import Logo from './Assets/Weather_App_Logo.png';
import './App.css';

const APIKEY = '4613a51056e1ac44144f469863026710';
const start = 'https://api.openweathermap.org/data/2.5/';

function App() {
  let [units, setUnits] = useState(() => 'metric');
  let [city, setCity] = useState(() => '');
  let [result, setResult] = useState({});

  const getWeatherData = (e) => {
    if(e.key === 'Enter'){
      fetch(`${start}weather?q=${city}&units=${units}&appid=${APIKEY}`)
      .then(res => res.json())
      .then(response => {
        setResult(response);
        setCity('');
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={Logo} alt=""/>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Enter a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}  
            onKeyPress={getWeatherData}
            />
        </div>
        <div>
          <button onClick={() => setUnits('metric')}>C</button>  
          <button onClick={() => setUnits('imperial')}>F</button>
        </div>
      </header>

      <main>
        <Forecast res={result} unit={(units === 'metric') ? 'C' : 'F'}></Forecast>
      </main>
    </div>
  );
}

export default App;
