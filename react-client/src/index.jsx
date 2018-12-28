import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Price from './components/price.jsx';
<<<<<<< HEAD
import Shipping from './components/shipping.jsx';
=======
import Stock from './components/stock.jsx';
>>>>>>> master

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct : {},
      currentUser : {},
      product : {}
    }
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct(id) {
    axios.get(`http://localhost:3016/listing/${id}`)
    .then(res => {
      this.setState({
        product : res.data,
        currentUser : res.data[0],
        currentProduct : res.data[1]
      })
    })
    .catch(err => {
      console.error(err);
    })

  }

  componentDidMount() {
    this.getProduct(21);
  }


  render() {
    return (
      <div className="mainComponent">

        <div className="priceComponent">
        <Price price={this.state.currentProduct.price} sale={this.state.currentProduct.sale} salePercent={this.state.currentProduct.salePercent} quantity={this.state.currentProduct.quantity} />
        </div>
<<<<<<< HEAD

        {(!this.state.currentProduct.sale ?
        <div className="shippingComponent">
        <Shipping shippingDetails={this.state.currentProduct.details}/>
        </div> : null )}
=======
        {(this.state.currentProduct.sale ? null :
          <div className="stockComponent">
          <Stock quantity={this.state.currentProduct.quantity} />
          </div>
        )}
>>>>>>> master
      </div>

    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
