import React, { useEffect, useState } from 'react';
import { colors } from '../../../settings/colors';
import { getDay } from '../../../utils/weatherAndDates';
import { Badge } from '../../Badge/Badge';
import { forecastExtended } from '../../../api/forecasteExtended';

import { TempTitle } from '../../TempTitle/TempTitle';
import { useFetch } from '../../../hooks/useFetch';
import './slide.scss';

export const Slide = () => {
  const forecastAPI = useFetch(forecastExtended);
  const [sliderData, setSlideItems] = useState([]);
  const [ctrlSlider, setCtrlSlider] = useState({ current: 0, next: 3 });

  const getExtendedForecast = () => {
    if (forecastAPI.data) {
      setSlideItems(forecastAPI.data?.list);
    }
  };

  const change = () => {
    if (ctrlSlider.next === 3) {
      setCtrlSlider({
        ...ctrlSlider,
        current: 3,
        next: 6,
      });
      return;
    }
    setCtrlSlider({
      ...ctrlSlider,
      current: 0,
      next: 3,
    });
  };

  // const prev = () => {};

  useEffect(() => {
    getExtendedForecast();
  });

  return (
    <section
      id='widget-carousel'
      className='widget-carousel mt-3 animate__animated animate__slow animate__fadeInUp'
    >
      <div className='widget-carousel-header'>
        <h3 className='widget-carousel-header-title'>Forecast Extended</h3>
        <div className='wrapper-button'>
          <button className='arrow-button' onClick={change}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='arrow-button' onClick={change}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
      <div className='list-items'>
        {!forecastAPI.loading &&
          sliderData
            .slice(ctrlSlider.current, ctrlSlider.next)
            .map((item, idx) => (
              <CarouselItem
                key={idx}
                date={item.date}
                temp={item.main.temp}
                humidity={item.main.humidity}
                windSpeed={item.wind.speed}
              />
            ))}
      </div>
    </section>
  );
};

const CarouselItem = ({ date, temp, humidity, windSpeed }) => {
  return (
    <div className='widget-carousel-item'>
      <p className='widget-day'>{getDay(date)}</p>
      <TempTitle temp={temp} />
      <div className='badges'>
        <Badge title={humidity + '%'} color={colors.pink} />
        <Badge title={windSpeed + ' m/s'} color={colors.blue} />
      </div>
    </div>
  );
};
