import React, { useContext } from 'react';
import DestinationCard from '../../components/DestinationCard';
import CityLightBoxContext from '../../context/CityLightBoxContext';
import { OPEN_LIGHTBOX } from '../../context/types/CityLightBoxTypes';

export default function Cities(props) {
  const _title = 'Cities in';
  const { destination, cities } = props;
  const { dispatch: toggleCityLightBox } = useContext(CityLightBoxContext);
  return (
    <div className='cities'>
      <div className='container'>
        <div className='cities__content'>
          <div className='text__subheader animation'>{`${_title} ${destination}`}</div>
          <div className='row'>
            {cities.length > 0 ? (
              cities.map((city) => (
                <div
                  className='col-4 animation'
                  key={city.id}
                  onClick={() =>
                    toggleCityLightBox({ type: OPEN_LIGHTBOX, payload: city })
                  }
                >
                  <DestinationCard
                    destination={city}
                    explore={0}
                    maximize={1}
                  ></DestinationCard>
                </div>
              ))
            ) : (
              <div className='cities__content__empty'>No data available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
