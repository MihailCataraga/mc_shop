import React from 'react'
import './categoryCard.scss'

export default function CategoryCard(props) {
  return (
    <div className='categoryCard'>
        <img src={props.img} alt='Category img' />
        <h4>{props.title}</h4>
    </div>
  )
}
