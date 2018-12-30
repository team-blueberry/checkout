import React from 'react';

const ShipTo = ({name, city, zip}) => {
  return (
    <div>
    <span className="shippingTo"> <a href="#">Deliver to {name} - {city} {zip} </a> </span> <hr />
    </div>
  )
}

export default ShipTo;
