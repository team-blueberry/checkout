import React from 'react';
import axios from 'axios';

class Price extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {(!this.props.sale ? <span id="priceNoSale">${this.props.price}</span> :
        <div id="LightningDeal">
          <span>${(this.props.salePercent * this.props.price).toFixed(2)}</span>
          <span> (Save {(this.props.salePercent * 100)}%) </span>
        </div>  )}
      </div>
    )
  }

}

export default Price;
