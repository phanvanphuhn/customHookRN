// eslint-disable-next-line prettier/prettier
import { useEffect } from 'react';
import { useReducer } from './useReducer';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'fetchAPI/request':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'fetchAPI/success':
    case 'fetchAPI/failed':
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null
  });

  useEffect(() => {
    (async () => {
      dispatch({
        type: 'fetchAPI/request',
        isLoading: false,
      });

      try {
        const res = await fetch(url);
        const { data } = await res.json();

        dispatch({
          type: 'fetchAPI/success',
          isLoading: false,
          data,
          error: null,
        });
      } catch (error) {
        dispatch({
          type: 'fetchAPI/success',
          isLoading: false,
          data: [],
          error,
        });
      }
    })();
  }, [url]);

  return { ...state };
};
