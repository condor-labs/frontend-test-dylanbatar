import React from 'react';
import './cardCity.scss';

export const CardCity = ({ city, image }) => {
  return (
    <div className='widget-card'>
      <div className='widget-card-image'>
        <img className='' src={image} alt='city' />
      </div>
      <div className='widget-card-content'>
        <p className='widget-city-name'>{city}</p>
        <a href='' target='_blank' className='visit-button'>
          Visit place
        </a>
      </div>
    </div>
  );
};
