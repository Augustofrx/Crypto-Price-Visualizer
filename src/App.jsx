import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import { TableCoins } from './Components/Table_coins';
import { WeatherInfo } from './Components/Weather_info';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState({})
  const [currency, setCurrency] = useState('USD')
   
  const handleCurrencyChange = (e) => {
    setCurrency( e ? e.target.value : currency)
   fetchCurrency(currency)
  }

  const fetchCurrency = async (currency) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency === 'USD' ? 'USD' : 'ARS'}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    setCoins(res.data)
  }



  const getWeatherData = async () => {
    const API_KEY = '09e1bc06f8a4ea6ad9f44830cc7f269f';
    let city = "Buenos Aires"
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    setWeatherData(res ? res.data : {});
  }


  useEffect(() => {
    handleCurrencyChange()
    getWeatherData();
  }, [currency, weatherData])


  return (
    <div className="container">
      <div className='header'>
        <WeatherInfo weatherData={weatherData} />
        <div className='d-flex'>
        <label htmlFor="Currency" className='me-2 fs-5'><strong>Select Currency</strong></label>
        <select name="Currency" onChange={handleCurrencyChange} className='bg-dark text-light border-0 rounded-2 p-1'>
          <option value='USD' defaultValue={true}>USD</option>
          <option value="ARS" >ARS</option>
        </select>
        </div>
      </div>
      <div className="row">
        <input type="text" placeholder='Search a coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
