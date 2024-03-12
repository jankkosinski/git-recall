import React, { useReducer } from 'react';
import { cities } from '../../data/cities';
import { destinations } from '../../data/destinations';
import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';

export default function DestinationsProvider({ children }) {
  const [state, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    cities,
  });
  return (
    <DestinationsContext.Provider value={{ state, dispatch }}>
      {children}
    </DestinationsContext.Provider>
  );
}
