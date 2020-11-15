import React from 'react';
import { colors } from '../../../settings/colors';
import { kelvinToCelsius } from '../../../utils/weatherAndDates';
import { Badge } from '../../Badge/Badge';
import { CityTitle } from '../../CityTitle/CityTitle';
import { ContainerCard } from '../ContainerCard/ContainerCard';

import './largeCard.scss';

export const LargeCard = ({
  city,
  desc,
  temp,
  humidity,
  windSpeed,
  icon,
  image,
}) => {
  return (
    <div className='widget-card'>
      <ContainerCard
        icon={icon}
        iconSize={60}
        backgroundColor={colors.white}
        iconColor={colors.yellow}
      >
        <div className='widget-card-wrapper'>
          <div className='widget-card-image'>
            <img src={image} alt='city' />
          </div>
          <div className='content'>
            <CityTitle city={city} icon classname='widget-headquarter-name' />
            <p className='widget-headquarter-desc'>{desc}</p>
            <div className='badges'>
              <Badge
                className='widget-temperature'
                title={kelvinToCelsius(temp) + '° C'}
                color={colors.yellow}
              />
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
          </div>
        </div>
      </ContainerCard>
    </div>
  );
};
