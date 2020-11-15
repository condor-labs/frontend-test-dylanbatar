export const saveVenues = (data) => {
  if (!sessionStorage.getItem('getvenues')) {
    sessionStorage.setItem('getvenues', JSON.stringify(data));
  }
};

export const getVenues = () => {
  return JSON.parse(sessionStorage.getItem('getvenues')) || [];
};
