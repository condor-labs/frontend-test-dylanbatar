import React from 'react';
import { WeatherIcon } from '../../WeatherIcon/WeatherIcon';

export const ContainerCard = ({
  children,
  icon,
  iconColor,
  iconSize,
  backgroundColor,
}) => {
  return (
    <div
      className='container-card'
      style={backgroundColor && { background: backgroundColor }}
    >
      {icon && (
        <div className='leading-icon'>
          <WeatherIcon icon={icon} size={iconSize} color={iconColor} />
        </div>
      )}
      {children}
    </div>
  );
};
