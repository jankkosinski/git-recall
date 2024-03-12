import React, { useContext } from 'react';
import DestinationCard from '../../components/DestinationCard';
import DestinationsContext from '../../context/DestinationsContext';

export default function Destinations() {
  const _title = 'Discover story-worthy travel moments - Trip With Me!';
  const _description =
    'The results are in! Explore this year’s expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire. Whether you’re interested in traveling to a new city, going on a cruise, or cooking a new dish — we’re committed to inspiring you to experience travel in a whole new way. ';
  const {
    state: { destinations }, // The object destructuring in destructuring process!! - interesting solution to get data
  } = useContext(DestinationsContext);
  return (
    <div className='destinations'>
      <div className='container'>
        <div className='row animation'>
          <div className='col-6 destinations__heading'>
            <h3 className='destinations__heading__body'>{_title}</h3>
          </div>
          <div className='col-6 destinations__description'>
            <p className='destinations__description__body'>{_description}</p>
          </div>
        </div>
        <div className='row'>
          {destinations.map((destination) => (
            <div className='col-3 animation' key={destination.id}>
              <DestinationCard destination={destination}></DestinationCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
