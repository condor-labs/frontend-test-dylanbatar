import React, { useEffect, useState } from 'react';
import { HeaderCard } from '../../Cards/HeaderCard/HeaderCard';
import { getVenues } from '../../../api/venues';
import { useFetch } from '../../../hooks/useFetch';
import { filterMainHeadquarter } from '../../../utils/filters';

export const Header = () => {
  const venueAPI = useFetch(getVenues);
  const [mainHeadquarter, setMainHeadquarter] = useState({});

  const getMainVanue = async () => {
    const [main] = filterMainHeadquarter(venueAPI.data?.places);
    setMainHeadquarter(main);
  };

  useEffect(() => {
    getMainVanue();
  });

  return (
    <header>
      {!venueAPI.loading && (
        <HeaderCard
          city={mainHeadquarter?.name}
          temp={mainHeadquarter?.main.temp}
          humidity={mainHeadquarter?.main.humidity}
          windSpeed={mainHeadquarter?.wind.speed}
          icon={mainHeadquarter?.weather[0].icon}
          image={mainHeadquarter?.image}
          date={mainHeadquarter?.date}
        />
      )}
    </header>
  );
};
