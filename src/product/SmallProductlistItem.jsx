import React from 'react'

const SmallProductlistItem = ({product}) => {
    const {name,price}=product;
  return (
    <div>
      <h1>{name}-{price}</h1>
    </div>
  )
}

export default SmallProductlistItem
