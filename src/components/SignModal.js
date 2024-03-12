import React, { useContext } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import SignModalContext from '../context/SignModalContext';
import { CLOSE_MODAL, PAYLOAD } from '../context/types/SignModalTypes';

export default function SignModal() {
  const { state, dispatch } = useContext(SignModalContext);
  const close = (e) => {
    if (e.target.getAttribute('class') === 'modal')
      dispatch({ type: CLOSE_MODAL });
  };
  return state.modalStatus ? (
    <div className='modal' onClick={close}>
      <div className='modal__body'>
        {state.payload === PAYLOAD.login ? <Login></Login> : null}
        {state.payload === PAYLOAD.register ? <Register></Register> : null}
      </div>
    </div>
  ) : null;
}
