import { kelvinToCelsius } from './weatherAndDates';

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

export const suggestDay = (days = []) => {
  const tempFilter = days.filter(
    (day) =>
      kelvinToCelsius(day.main.temp) >= 25 &&
      kelvinToCelsius(day.main.temp) <= 28
  );
  return lessHumidity(tempFilter);
};

const lessHumidity = (humiditys = []) => {
  let less = humiditys[0];
  humiditys.forEach((item) => {
    if (item.main.humidity < less.main.humidity) {
      less = item;
    }
  });
  return less;
};
