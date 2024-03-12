import React, { useReducer } from 'react';
import SignModalReducer from '../reducers/SignModalReducer';
import SignModalContext from '../SignModalContext';

export default function SignModalProvider({ children }) {
  const [state, dispatch] = useReducer(SignModalReducer, {
    modalStatus: false,
    payload: '',
  });

  return (
    <SignModalContext.Provider value={{ state, dispatch }}>
      {children}
    </SignModalContext.Provider>
  );
}
