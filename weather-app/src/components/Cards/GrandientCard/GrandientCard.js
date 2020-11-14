import React from 'react';
import { colors } from '../../../settings/colors';
import { Badge } from '../../Badge/Badge';
import { CityTitle } from '../../CityTitle/CityTitle';
import { TempTitle } from '../../TempTitle/TempTitle';

export const GrandientCard = ({
  city,
  temp,
  humidity,
  windSpeed,
  icon,
  day,
}) => {
  return (
    <div>
      <CityTitle city={city} icon={icon} />
      <div className=''>
        <TempTitle temp={temp} />
        <div className=''>
          <Badge title={humidity + '%'} color={colors.pink} />
          <Badge title={windSpeed + ' m/s'} color={colors.blue} />
          <div>
            <p>{day}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
