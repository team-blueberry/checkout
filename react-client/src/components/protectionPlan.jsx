import React from 'react';

class ProtectionPlan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      four : false,
      two : false
    }
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(event) {
    console.log(event.target.name);

  }

  render() {
    if (this.props.isElectronic) {
    return (
    <div className="protection">
      <b>Add a Protection Plan: </b>
      <div>
        <input type="radio" id="four" name="drone" value="four" className="selectedOption"/>
        <label for="four"><span className="linkClick">4-Year Protection</span><span> for </span> <span className="priceNoSale">${this.props.fourYear}</span></label>
      </div>

      <div>
        <input type="radio" id="two" name="drone" value="two" className="selectedOption"/>
        <label for="two"><span className="linkClick">2-Year Protection</span><span> for </span> <span className="priceNoSale">${this.props.twoYear}</span></label>
      </div>
    </div>
      )
    }
    else { return null; }
  }
}

export default ProtectionPlan;
