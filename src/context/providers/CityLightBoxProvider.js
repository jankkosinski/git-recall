import React, { useReducer } from 'react';
import CityLightBoxContext from '../CityLightBoxContext';
import { CityLightBoxReducer } from '../reducers/CityLightBoxReducer';

export default function CityLightBoxProvider({ children }) {
  const [state, dispatch] = useReducer(CityLightBoxReducer, {
    lightBoxStatus: false,
    payload: '',
  });
  return (
    <CityLightBoxContext.Provider value={{ state, dispatch }}>
      {children}
    </CityLightBoxContext.Provider>
  );
}
