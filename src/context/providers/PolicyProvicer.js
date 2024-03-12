import React, { useReducer } from 'react';
import { policy } from '../../data/policy';
import PolicyContext from '../PolicyContext';
import PolicyReducer from '../reducers/PolicyReducer';

export default function PolicyProvicer({ children }) {
  const [state, dispatch] = useReducer(PolicyReducer, {
    policy,
  });
  return (
    <PolicyContext.Provider value={{ state, dispatch }}>
      {children}
    </PolicyContext.Provider>
  );
}
