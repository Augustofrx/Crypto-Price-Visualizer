import React from 'react'
import { CoinRow } from './Coin_row'

export const TableCoins = ({ coins, search, currency }) => {

    const Titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

    const filtered_coins = coins? coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())) : ""

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {Titles.map((title, index)=> (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filtered_coins ? filtered_coins.map((coin, index) => (
                    coin ? 
                    <CoinRow coin={coin} key={coin.id} index={index + 1} currency={currency} /> :
                    ""
                )): ""}
            </tbody>
        </table>
    )
}
