import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Price from './components/price.jsx';

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
    this.getProduct(87);
  }


  render() {
    return (
      <div>
        <div className="priceComponent">
        <Price price={this.state.currentProduct.price} sale={this.state.currentProduct.sale} salePercent={this.state.currentProduct.salePercent} quantity={this.state.currentProduct.quantity} />
        </div>
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
