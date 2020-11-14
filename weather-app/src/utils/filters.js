import { kelvinToCelsius } from './weather';

export const filterMainHeadquarter = (venues = []) => {
  return venues.filter((venue) => venue.main_headquarter === true);
};

export const suggestCities = (cities = []) => {
  return cities.filter((city) => {
    if (
      kelvinToCelsius(city.main.temp) >= 24 &&
      kelvinToCelsius(city.main.temp) <= 30
    )
      return city;
  });
};
