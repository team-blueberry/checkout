import React from 'react';
import Details from './details.jsx';

class Shipping extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails : false
    }
    this.toggleDetails = this.toggleDetails.bind(this);

  }

  toggleDetails () {
    this.setState({showDetails : !this.state.showDetails});
  }
  render() {
    return (
      <div>
      <span className="shippingPrice"><b>& FREE Shipping.</b> </span>
      <span className="linkClick" onClick={this.toggleDetails}>Details</span>
      <Details show={this.state.showDetails} toggle={this.toggleDetails} shippingDetails={this.props.shippingDetails} />
      </div>
    )
  }
}

export default Shipping;
