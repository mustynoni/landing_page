import React from 'react'

function Pricing() {
    const prices=[
        {name : 'OFFICE CLEANING', price: '£17'},
        {name : 'HOUSE CLEANING SERVICE', price: '£'},
        {name : 'END OF TENANCY CLEAN', price: '£'},
        {name : 'NEW BUILDS CLEAN', price: '£'},
        {name : 'DEEP CLEANING', price: '£'},
        {name : 'IRONING SERVICES', price: '£'},
        {name : 'HOLIDAY CLEANING', price: '£'},
        {name : 'BNB CLEANING', price: '£'},
        {name : 'HOTEL CLEANING', price: '£'}
    
    ]
    const pricelist = prices.map(prices => <tr>
            <td>{prices.name}</td>
            <td>From {prices.price} per hour</td>
        </tr>
    )
    


  return (
    <div className='price' id='pricing'>
        <span className='abtulin'><span className='line'></span> PRICING</span>
        <h2>Qualiity Clean Prices</h2>
        <table>
            <tbody>  
                {pricelist}
            </tbody>
        </table>
      
    </div>
  )
}

export default Pricing

