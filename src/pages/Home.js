import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import SignModal from '../components/SignModal';
import SignModalContext from '../context/SignModalContext';
import { OPEN_MODAL, PAYLOAD } from '../context/types/SignModalTypes';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Destinations from '../layout/sections/Destinations';
import Policy from '../layout/sections/Policy';

export default function Home() {
  const { dispatch } = useContext(SignModalContext);
  const _title = 'Trip With Me';
  const _startButtonTitle = 'Get Started';
  return (
    <>
      <Helmet>
        <title>{_title}</title>
      </Helmet>
      <Header>
        <button
          className='btn-start'
          onClick={() => dispatch({ type: OPEN_MODAL, payload: PAYLOAD.login })}
        >
          {_startButtonTitle}
        </button>
      </Header>
      <SignModal></SignModal>
      <Destinations></Destinations>
      <Policy></Policy>
      <Footer></Footer>
    </>
  );
}
