import React from 'react'


export const Coin_row = ({ coin, index }) => {
<script src="./styles.css"></script>
    let {name, image,symbol, current_price, price_change_percentage_24h, total_volume } = coin
    return (
        <tr >
            <td>{index}</td>
            <td>
                <img src={image} alt={name} style={{width: '5%'}}className=" img-container img-fluid me-4" />
                <span>{name}</span>
                <span className='ms-3 text-muted text-uppercase'>{symbol}</span></td>
            <td>ARS: ${current_price}</td>
            <td className={price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {price_change_percentage_24h}
            </td>
            <td>{total_volume}</td>
        </tr>
    )
}
