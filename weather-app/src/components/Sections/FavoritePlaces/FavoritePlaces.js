import React, { useEffect, useState } from 'react';
import { getVenues } from '../../../api/venues';
import { filterMainHeadquarter } from '../../../utils/filters';
import { LargeCard } from '../../Cards/LargeCard/LargeCard';
import './favoritePlaces.scss';

export const FavoritePlaces = () => {
  const [venues, setVenues] = useState([]);

  const loadVenues = async () => {
    const response = await getVenues();
    const otherVenues = filterMainHeadquarter(response.places, false);
    setVenues(otherVenues);
  };

  useEffect(() => {
    loadVenues();
  }, []);

  return (
    <section
      id='widget-favorite'
      className='widget-favorite animate__animated animate__slow animate__fadeInLeft'
    >
      <h2 className='mb-4 mt-4 title-section'>
        Our favorite <span>places</span>
      </h2>
      <div className='favorite-list'>
        {venues.length > 0 &&
          venues.map((venue) => (
            <LargeCard
              key={venue.id}
              city={`${venue?.name} - ${venue?.sys.country}`}
              desc={venue?.description}
              temp={venue?.main.temp}
              humidity={venue?.main.humidity}
              icon={venue?.weather[0].icon}
              windSpeed={venue?.wind.speed}
              image={venue?.image}
            />
          ))}
      </div>
    </section>
  );
};
