import React, { useState } from 'react';

const Card = ({id, image, info, price, name, removeTour}) => {

  const[readmore, setReadmore] = useState(false);

  const description = `${info.substring(0,200)}...`;
  const fullDescription = `${info.substring(0)}`;
  
  function readmoreHandler(){
    setReadmore(!readmore);
  }

  

  return (
    <div className="card">
        <img src={image} alt="" className="image"/>

        <div className="tour-info">

          <div className="tour-details">
            <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>

          <div className="description">
            {readmore ? fullDescription:description}
            <span className='read-more' onClick={readmoreHandler}>
                {readmore ? `Show Less`: `Read More`}
            </span>
          </div>

        </div>
        <button className='btn-red' onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Card