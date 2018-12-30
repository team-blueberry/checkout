import React from 'react';

const ShipTo = ({name, city, zip}) => {
  return (
    <div>
    <span className="shippingTo">Deliver to {name} - {city} {zip}</span> <hr />
    </div>
  )
}

export default ShipTo;
