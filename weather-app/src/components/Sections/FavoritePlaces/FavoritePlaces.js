import React from 'react';
import { LargeCard } from '../../Cards/LargeCard/LargeCard';
import './favoritePlaces.scss';

export const FavoritePlaces = () => {
  return (
    <section
      id='widget-favorite'
      className='widget-favorite animate__animated animate__slow animate__fadeInLeft'
    >
      <h2 className='mb-4 mt-4 title-section'>
        Our favorite <span>places</span>
      </h2>
      <div className='favorite-list'>
        <LargeCard
          city='cartagena - co'
          desc='kiren giren kira gon gon es el amo'
          temp={298}
          humidity={4}
          icon={'cloudy'}
          windSpeed={4.2}
          image={
            'https://images.unsplash.com/photo-1563668454696-170e01768e54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          }
        />
        <LargeCard
          city='cartagena - co'
          temp={298}
          desc='kiren giren kira gon gon es el amo'
          humidity={4}
          icon={'cloudy'}
          windSpeed={4.2}
          image={
            'https://images.unsplash.com/photo-1563668454696-170e01768e54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </div>
    </section>
  );
};
