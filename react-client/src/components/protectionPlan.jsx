import React from 'react';

const ProtectionPlan = ({twoYear, fourYear, isElectronic}) => {
  if (isElectronic) {
  return (
    <div className="protection">
    <b>Add a Protection Plan: </b>
      <form>
      <input type="checkbox" name="fourYear" className="check" /> <a href="#">4-Year Protection</a> for <span className="priceNoSale"> ${fourYear}</span><br />
      <input type="checkbox" name="twoYear" className="check" /> <a href="#">2-Year Protection</a> for <span className="priceNoSale"> ${twoYear}</span><br />
      </form>
    </div>
    )
  }
  else {
    return null;
  }
}

export default ProtectionPlan;
