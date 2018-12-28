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
      <a href="#" className="shippingPrice" onClick={this.toggleDetails}>Details</a>
      <Details show={this.state.showDetails} toggle={this.toggleDetails} shippingDetails={this.props.shippingDetails} />
      </div>
    )
  }
}

export default Shipping;
