import React from 'react'
import { Link } from "react-router-dom";  
import '../css/CardFood.css';

const CardFood = ({img, title}) => {
    return (
        <div className='card'>
            <img src={img} alt={title} className="img"/>
            <p>{title}</p>
        </div>
    )
}

export default CardFood