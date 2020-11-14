import React, { useEffect, useState } from 'react';
import { forecastExtended } from '../../../api/forecasteExtended';
import { useFetch } from '../../../hooks/useFetch';
import { suggestDay } from '../../../utils/filters';
import { SuggestCard } from '../../Cards/SuggestCard/SuggestCard';

export const Suggets = () => {
  const suggetAPI = useFetch(forecastExtended);
  const [bestDay, setBestDay] = useState({});

  const getSuggestDay = () => {
    const suggetFilter = suggestDay(suggetAPI.data?.list);
    setBestDay(suggetFilter);
  };

  useEffect(() => {
    getSuggestDay();
  }, [!suggetAPI.loading]);

  return (
    <section id='widget-suggest' className='widget-suggest'>
      <h2 className='mt-4 mb-3 title-section'>
        HeadQuater <span>Suggest</span>
      </h2>
      {!suggetAPI.loading && (
        <SuggestCard
          city={`${suggetAPI.data?.city.name} - ${suggetAPI.data?.city.country}`}
          temp={bestDay?.main.temp}
          humidity={bestDay?.main.humidity}
          date={bestDay?.date}
          icon={bestDay?.weather[0].icon}
          windSpeed={bestDay?.wind.speed}
        />
      )}
    </section>
  );
};
