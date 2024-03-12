import React, { useState } from 'react';

export default function ContactForm() {
  const _submit = 'Send request';
  const [state, setState] = useState({
    name: '',
    email: '',
    text: '',
  });
  const submitRequest = (e) => {
    e.preventDefault();
    console.log(state);
    setState({
      name: '',
      email: '',
      text: '',
    });
  };
  return (
    <form className='contact_form fade-form' onSubmit={submitRequest}>
      <div className='contact_form__body'>
        <div className='control animation'>
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
        <div className='control animation'>
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
        <div className='control animation'>
          <textarea
            type='text'
            name='text'
            className='control__textarea'
            placeholder='Type your message...'
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, text: e.target.value }))
            }
            value={state.text}
          />
        </div>
        <div className='control animation'>
          <button type='submit' className='btn-submit control__full'>
            {_submit}
          </button>
        </div>
      </div>
    </form>
  );
}
