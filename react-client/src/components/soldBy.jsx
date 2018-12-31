import React from 'react';

const SoldBy = (props) => {
  return (
    <div className="solBy">
    <span> Sold by </span>
    <span className='linkClick'>{props.seller} </span>
    {(props.fba ? <span>and <span className="linkClick"> Fulfilled by Amazon</span></span> : null)}
    </div>
  )
}

export default SoldBy;
