import React from 'react'
import './productCard.scss'

export default function ProductCard(props) {
  return (
    <div className='productCard'>
        <img src={props.img} alt='Product img' />
        <h4>{props.name}</h4>
        <p>{props.storage} | {props.color}</p>
    </div>
  )
}