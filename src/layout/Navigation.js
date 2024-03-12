import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

export default function Navigation() {
  const _homePageTitle = 'Home';
  const _aboutPageTitle = 'About';
  const _contactPageTitle = 'Contact';
  const { state, dispatch } = useContext(NavContext);
  const navigateAndScroll = () => {
    dispatch({ type: NAV_TOGGLE });
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={`nav ${state ? '' : 'nav--closed'}`}>
        <div className={`nav__content ${state ? '' : 'nav__content--closed'}`}>
          <NavLink
            className='nav__content__link'
            onClick={navigateAndScroll}
            to='/'
          >
            {_homePageTitle}
          </NavLink>
          <NavLink
            className='nav__content__link'
            onClick={navigateAndScroll}
            to='/about'
          >
            {_aboutPageTitle}
          </NavLink>
          <NavLink
            className='nav__content__link'
            onClick={navigateAndScroll}
            to='/contact'
          >
            {_contactPageTitle}
          </NavLink>
        </div>
      </div>
    </>
  );
}
