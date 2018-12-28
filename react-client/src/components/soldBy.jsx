import React from 'react';

const SoldBy = (props) => {
  return (
    <div className="solBy">
    <span> Sold by </span>
    <a href="#">{props.seller} </a>
    {(props.fba ? <span>and <a href="#"> Fulfilled by Amazon</a></span> : null)}
    </div>
  )
}

export default SoldBy;
