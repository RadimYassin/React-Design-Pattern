import React from 'react'

export default function LargProductlistItem({product}) {
    const {name,price,dsc,rating}=product
  return (
    <div>
        <p>{name}</p>
      <h1>{price}</h1>
      <h1>{dsc}</h1>
      <span>{rating}</span>
      
    </div>
  )
}
