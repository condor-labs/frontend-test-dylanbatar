import React from 'react';
import { colors } from '../../../settings/colors';
import { dateMessage } from '../../../utils/weatherAndDates';
import { Badge } from '../../Badge/Badge';
import { CityTitle } from '../../CityTitle/CityTitle';
import { TempTitle } from '../../TempTitle/TempTitle';
import { ContainerCard } from '../ContainerCard/ContainerCard';

import './headerCard.scss';

export const HeaderCard = ({
  city,
  temp,
  humidity,
  windSpeed,
  icon,
  image,
  date,
}) => {
  return (
    <ContainerCard icon={icon} iconSize={100} iconColor={colors.yellow}>
      <div
        id='widget-header'
        className='widget-header animate__animated animate__slow animate__fadeInDown'
      >
        <img
          src={image}
          className='widget-header-image card-border'
          alt='city'
        />

        <div className='widget-content'>
          <CityTitle city={city} icon background />
          <div className='mt-10'>
            <TempTitle temp={temp} />
          </div>

          <div className='widget-content-badges mb-6'>
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

          <div className='widget-message-date'>
            <p>{dateMessage(date)},</p>
            <p className='condor-text'>Condor!</p>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};
