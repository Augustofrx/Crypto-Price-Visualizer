
import axios from 'axios'

async function fetchCurrency(currency, setCoins) {

        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
            currency === "USD" ? "USD" : "ARS"
          }&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        console.log(res.data)
        setCoins(res.data);

}

export default fetchCurrency