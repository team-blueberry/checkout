import React from 'react';

const Details = (props) => {
  const showModal = props.show ? 'modal display-block' : 'modal display-none';
  return(
    <div className={showModal}>
    <section className="detailsModal">
    <button className="closeButton" onClick={props.toggle}>Close Window</button>
    <br />
    <h1> <b>Order With Free Shipping by Amazon </b></h1>
    <br />
      {props.shippingDetails}
      <ul>
        <li>{props.shippingDetails}</li>
      </ul>
    </section>
    </div>
  )
}

export default Details;
