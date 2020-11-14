import { useState, useEffect } from 'react';

export const useFetch = (requestFunc) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    requestFunc()
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [requestFunc]);

  return state;
};
