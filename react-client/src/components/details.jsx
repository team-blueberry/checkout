import React from 'react';

const Details = (props) => {
  const showModal = props.show ? 'modal display-block' : 'modal display-none';
  return(
    <div className={showModal}>
    <section className="detailsModal">
      {props.shippingDetails}

    </section>
      <button onClick={props.toggle}>Close</button>
    </div>
  )
}

export default Details;
