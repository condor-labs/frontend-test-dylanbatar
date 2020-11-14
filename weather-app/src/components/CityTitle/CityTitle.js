import React from 'react';
import './cityTitle.scss';

export const CityTitle = ({ city, icon, background, classname }) => {
  return (
    <div
      className={`${
        background ? 'purple-background' : ''
      }   widget-headquarter-content`}
    >
      {icon && <i className='fas fa-map-marker-alt'></i>}
      <p className={`${classname ? classname : ''} widget-headquarter`}>
        {city}
      </p>
    </div>
  );
};
