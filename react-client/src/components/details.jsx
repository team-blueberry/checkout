import React from 'react';

const Details = (props) => {
  const showModal = props.show ? 'modal display-block' : 'modal display-none';
  return(
    <div className={showModal}>
    <section className="detailsModal">
    <button className="closeButton" onClick={props.toggle}>Close Window</button>
    <br />
    <h1> Order With Free Shipping by Amazon </h1>
    <br />
      {props.shippingDetails}
    </section>
    </div>
  )
}

export default Details;
