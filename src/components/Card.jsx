import React from 'react'

const Cart=(props)=>{

    return (
        <div className={`container ${props.bgColor}`}>
            <div className='header'>
                <p>{props.date}</p>
               <img src={props.logo} alt="" className='img'/>
            </div>
            <button>{props.button}</button>
            <h1>{props.title1}</h1>
            <h1>{props.title2}</h1>
            <div className='footer'>
                <p>{props.mode}</p>
                <p className='arrow'>{props.arrow}</p>
            </div>
        </div>
    )
}

export default Cart