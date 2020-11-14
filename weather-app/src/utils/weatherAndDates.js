export const kelvinToCelsius = (temp) => {
  const BASE = 273.15;
  return Math.round(temp - BASE);
};

export const dateMessage = (date) => {
  const dateTransform = new Date(date).getHours();
  if (dateTransform > 4 && dateTransform < 12) return 'Good Morning';
  else if (dateTransform >= 12 && dateTransform < 18) return 'Good Afternoon';
  else return 'Good Nigth';
};

export const getDay = (date) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const dayIndex = new Date(date).getDay();
  return days[dayIndex];
};
