import React from 'react';
import 'weather-icons/css/weather-icons.css';

export const WeatherIcon = ({ icon, color, size = 70 }) => {
  return (
    <div className=''>
      <i
        className={`wi wi-day-${icon} widget-icon`}
        style={{ fontSize: size + 'px', color }}
      ></i>
    </div>
  );
};
