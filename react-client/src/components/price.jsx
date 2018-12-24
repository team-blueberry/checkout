import React from 'react';
import axios from 'axios';

class Price extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity : 0,
      itemsSold : 0,
      secs : 59,
      mins : 59,
      activeDeal : true
    }
    this.timer = this.timer.bind(this);
  }

  timer() {
    var itemsSoldRate = 10;
    if (this.state.activeDeal) {
      setInterval( () => {
        if (this.state.secs === 0 && this.state.mins === 0) {
         this.setState({activeDeal: false});
         return;
        }
        else if (this.state.secs > 0) {
          if (this.state.secs % itemsSoldRate === 0) {
            this.setState({itemsSold: this.state.itemsSold+=1});
            this.setState({secs: this.state.secs-= 1});
          }
          this.setState({secs: this.state.secs-= 1});
        }
        else if (this.state.secs === 0 ) {
          this.setState({
            secs: 59,
            mins: this.state.mins-= 1
          });
        }
      } ,1000)
    }
  }


  componentDidMount() {
    this.setState({
      quantity : this.props.quantity,
      secs :  Math.floor(Math.random() * 60),
      mins :  Math.floor(Math.random() * 60),
    });

    this.timer();
  }

  render() {
    return (
      <div>
      Lightning Deal
        {(!this.props.sale ? <span id="priceNoSale">${this.props.price}</span> :
        <div id="LightningDeal">
          <span>${(this.props.salePercent * this.props.price).toFixed(2)}</span>
          <span> (Save {(this.props.salePercent * 100)}%) </span>
        </div>  )}

        <div className="timer">
        {(this.state.activeDeal ? <div><span>{this.state.mins}:</span><span>{this.state.secs}</span></div> : <span id="endDeal">Deal has Ended</span>)}
        </div>
      </div>
    )
  }

}

export default Price;
