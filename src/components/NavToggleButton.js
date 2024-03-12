import React, { useContext } from 'react';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

export default function NavToggleButton() {
  const { state, dispatch } = useContext(NavContext);
  return (
    <div className='nav__toggle'>
      <button
        className='btn-nav'
        onClick={() => dispatch({ type: NAV_TOGGLE })}
      >
        <span className={`btn-nav__line ${!state ? '' : 'close'}`}></span>
        <span className={`btn-nav__line ${!state ? '' : 'close'}`}></span>
        <span className={`btn-nav__line ${!state ? '' : 'close'}`}></span>
      </button>
    </div>
  );
}
