import React from 'react';

const ShipTo = ({loggedIn, name, city, zip}) => {
  return (

    <div>
    <span className="linkClick">Deliver to {name} - {city} {zip}</span>
    </div>
  )
}

export default ShipTo;
