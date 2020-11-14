import React, { useEffect } from 'react';
import { forecastExtended } from '../../../api/forecasteExtended';
import { useFetch } from '../../../hooks/useFetch';

export const Suggets = () => {
  const suggetAPI = useFetch(forecastExtended);

  useEffect(() => {
    console.log(suggetAPI);
  }, []);

  return <section></section>;
};
