import React, { useContext, useState } from 'react';
import SignModalContext from '../context/SignModalContext';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  PAYLOAD,
} from '../context/types/SignModalTypes';

export default function Login() {
  const title = 'Login';
  const submit = 'Sign In';
  const link_text = 'Create new account';
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const { dispatch } = useContext(SignModalContext);
  const submitLoginForm = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <form className='fade-form' onSubmit={submitLoginForm}>
      <div className='modal__heading'>
        <h3>{title}</h3>
      </div>
      <div className='modal__groups'>
        <div className='control'>
          <input
            type='email'
            name='email'
            className='control__input'
            placeholder='Enter email'
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, email: e.target.value }))
            }
            value={state.email}
          />
        </div>
        <div className='control'>
          <input
            type='password'
            name='password'
            className='control__input'
            placeholder='Enter password'
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            value={state.password}
          />
        </div>
        <div className='control'>
          <button type='submit' className='btn-submit control__full'>
            {submit}
          </button>
          <div
            className='control__link'
            onClick={() =>
              dispatch({ type: OPEN_MODAL, payload: PAYLOAD.register })
            }
          >
            {link_text}
          </div>
        </div>
      </div>
    </form>
  );
}
