import React, { useEffect, useState } from 'react';
import { HeaderCard } from '../../Cards/HeaderCard/HeaderCard';
import { getVenues } from '../../../api/venues';
import { useFetch } from '../../../hooks/useFetch';
import { filterMainHeadquarter } from '../../../utils/filters';
import { saveVenues } from '../../../utils/store';
import { Loading } from '../../Loading/Loading';

export const Header = () => {
  const venueAPI = useFetch(getVenues);
  const [mainHeadquarter, setMainHeadquarter] = useState({});

  const getMainVanue = async () => {
    saveVenues(venueAPI.data?.places);
    const [main] = filterMainHeadquarter(venueAPI.data?.places, true);
    setMainHeadquarter(main);
  };

  useEffect(() => {
    getMainVanue();
  });

  return (
    <header>
      {!venueAPI.loading ? (
        <HeaderCard
          city={mainHeadquarter?.name}
          temp={mainHeadquarter?.main.temp}
          humidity={mainHeadquarter?.main.humidity}
          windSpeed={mainHeadquarter?.wind.speed}
          icon={mainHeadquarter?.weather[0].icon}
          image={mainHeadquarter?.image}
          date={mainHeadquarter?.date}
        />
      ) : (
        <Loading />
      )}
    </header>
  );
};
