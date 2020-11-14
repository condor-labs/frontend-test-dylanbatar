import React, { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { citiesPrognostic } from '../../../api/cities';
import { suggestCities } from '../../../utils/filters';
import { CardCity } from '../../Cards/CardCity/CardCity';

import './visitPlace.scss';

export const VisitPlace = () => {
  const citiesAPI = useFetch(citiesPrognostic);
  const [cities, setCities] = useState([]);

  const getSuggetCities = () => {
    const filter = suggestCities(citiesAPI.data?.result);
    setCities(filter);
  };

  useEffect(() => {
    getSuggetCities();
  }, [!citiesAPI.loading]);

  return (
    <section
      id='widget-cities'
      className='widget-cities animate__animated animate__slow animate__fadeInRight'
    >
      <h2 className='mb-3 mt-4 title-section'>
        PLACE TO <span>VISIT</span>
      </h2>
      {!citiesAPI.loading && (
        <div className='cities-list'>
          {cities.map((city) => (
            <CardCity key={city.id} city={city.name} image={city.image} />
          ))}
        </div>
      )}
    </section>
  );
};
