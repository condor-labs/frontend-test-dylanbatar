export const filterMainHeadquarter = (venues = []) => {
  return venues.filter((venue) => venue.main_headquarter === true);
};
