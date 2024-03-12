import React from 'react';
import { MdPlace } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
export default function DestinationCard({
  destination,
  explore = 1,
  maximize = 0,
}) {
  const explore_button = 'Explore';
  return (
    <div className='destination'>
      <div
        className={`destination__card ${
          maximize ? 'destination__card--maximize' : ''
        }`}
      >
        <LazyLoadImage
          className='destination__card__img'
          alt={destination.image}
          src={destination.image}
        />
        <div className='destination__card__layer'>
          <div className='destination__card__layer__content'>
            <MdPlace />
            <div className='text__uppercase--first-letter'>
              {destination.name}
            </div>
          </div>
        </div>
        {explore ? (
          <div className='destination__card__explore'>
            <Link className='btn-basic' to={`details/${destination.id}`}>
              {explore_button}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
