import React, {useState} from 'react';
import Forecast from './Components/Forecast.js';
import Logo from './Assets/Weather_App_Logo.png';
import './App.css';

const APIKey = process.env.REACT_APP_API_KEY;

function App() {
  let [units, setUnits] = useState(() => 'metric');
  let [city, setCity] = useState(() => '');
  let [result, setResult] = useState({});

  const getData = (e) => {
    if(e.key === 'Enter'){
      console.log(APIKey);
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
            onKeyPress={getData}
            />
        </div>
        <div>
          <button onClick={() => setUnits('metric')}>C</button>  
          <button onClick={() => setUnits('imperial')}>F</button>
        </div>
      </header>

      <main>
        <Forecast></Forecast>
      </main>
      
      <footer className="Footer">
          Icons from <a href="https://www.flaticon.com/" title="Freepik">Freepik</a> 
      </footer>
    </div>
  );
}

export default App;
