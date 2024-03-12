import React, { useContext, useState } from 'react';
import SignModalContext from '../context/SignModalContext';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  PAYLOAD,
} from '../context/types/SignModalTypes';

export default function Register() {
  const title = 'Create new account';
  const submit = 'Sign Up';
  const link_text = 'Already you have an account?';
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { dispatch } = useContext(SignModalContext);
  const submitRegisterForm = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <form className='fade-form' onSubmit={submitRegisterForm}>
      <div className='modal__heading'>
        <h3>{title}</h3>
      </div>
      <div className='modal__groups'>
        <div className='control'>
          <input
            type='text'
            name='name'
            className='control__input'
            placeholder='Enter name'
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, name: e.target.value }))
            }
            value={state.name}
          />
        </div>
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
            placeholder='Create password'
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
              dispatch({ type: OPEN_MODAL, payload: PAYLOAD.login })
            }
          >
            {link_text}
          </div>
        </div>
      </div>
    </form>
  );
}
