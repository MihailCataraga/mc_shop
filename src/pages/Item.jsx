import React from 'react'
import { useSelector } from 'react-redux'

export default function Item() {
  
  // Take product from Redux store
  const product = useSelector((state) => state.itemData)
  return (
    <div>
      <img src={product.img} alt='Item img'/>
      <h1>{product.name}</h1>
      <p>Storage: {product.storage} | Color: {product.color} jjjj</p>
    </div>
  )
}
