import React from 'react';
import { colors } from '../../../settings/colors';
import { getDay } from '../../../utils/weatherAndDates';
import { Badge } from '../../Badge/Badge';
import { CityTitle } from '../../CityTitle/CityTitle';
import { TempTitle } from '../../TempTitle/TempTitle';
import { ContainerCard } from '../ContainerCard/ContainerCard';

import './suggestCard.scss';

export const SuggestCard = ({
  city,
  temp,
  humidity,
  windSpeed,
  icon,
  date,
}) => {
  return (
    <ContainerCard
      icon={icon}
      iconColor={colors.yellow}
      backgroundColor={
        'linear-gradient(163deg,rgba(89, 122, 239, 1)  39%,rgba(90, 0, 234, 1) 100%)'
      }
    >
      <div className='wrapper-card'>
        <CityTitle city={city} icon classname='widget-day' />
        <TempTitle temp={temp} />
        <div className='footer-card'>
          <div className='badges'>
            <Badge
              className='widget-humidity'
              title={humidity + '%'}
              color={colors.pink}
            />
            <Badge
              className='widget-wind'
              title={windSpeed + ' m/s'}
              color={colors.blue}
            />
          </div>
          <p className='widget-day'>{getDay(date)}</p>
        </div>
      </div>
    </ContainerCard>
  );
};
