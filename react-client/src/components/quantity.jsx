import React from 'react';

const QuantityDropDown = ({maxQuantity}) =>  {
    let allOptions = [];
    for (var i = 1; i < maxQuantity; i+=1) {
      allOptions.push(i);
    }
    return(
      <div className="dropdown">
      Qty: 
        <select id="quantityDropDown">
          {allOptions.map(num => {
            return <option key={num}>{num}</option>
          })}
        </select>
      </div>
    )
}

export default QuantityDropDown;
