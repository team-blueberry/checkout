import React from 'react';

const Stock = ({quantity}) => {
  return (
    <span>
    <br />
    {(quantity > 10 ? <span className="inStock">In Stock.</span> : <span className="limitedStock">Only {quantity} Left!</span>)}
    </span>
  )
}

export default Stock;
