import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CityLightBoxContext from '../context/CityLightBoxContext';
import { CLOSE_LIGHTBOX } from '../context/types/CityLightBoxTypes';

export default function CityLightBox() {
  const {
    state: { payload: city },
    dispatch,
  } = useContext(CityLightBoxContext);
  return (
    <div className='city-lightbox'>
      <div className='city-lightbox__content'>
        <div className='city-lightbox__content__heading'>
          <div className='city-lightbox__content__heading__title'>
            {city.name}
          </div>
          <div
            className='btn-text'
            onClick={() => dispatch({ type: CLOSE_LIGHTBOX })}
          >
            <MdClose size={25}></MdClose>
          </div>
        </div>
        <LazyLoadImage
          className='city-lightbox__content__image'
          src={city.image}
          alt={city.image}
        />
      </div>
    </div>
  );
}
