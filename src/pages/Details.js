import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CityLightBox from '../components/CityLightBox';
import CityLightBoxContext from '../context/CityLightBoxContext';
import DestinationsContext from '../context/DestinationsContext';
import ReviewsContext from '../context/ReviewsContext';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Cities from '../layout/sections/Cities';
import DetailsOverview from '../layout/sections/DetailsOverview';
import Reviews from '../layout/sections/Reviews';

export default function Details() {
  const { id } = useParams();
  const {
    state: { destinations, cities },
  } = useContext(DestinationsContext);
  const {
    state: { reviews },
  } = useContext(ReviewsContext);
  const {
    state: { lightBoxStatus },
  } = useContext(CityLightBoxContext);
  const destinationData = destinations.find(
    (destination) => destination.id === parseInt(id)
  );
  const destinationCities = cities.filter(
    (city) => city.destinationId === destinationData.id
  );
  const destinationReviews = reviews.filter((review) =>
    review.destinatios.includes(destinationData.id)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{destinationData.name}</title>
      </Helmet>
      <Header
        title={destinationData.name}
        intro_text={''}
        video_path={''}
        poster_path={destinationData.bigImage}
        logo={''}
      ></Header>
      {lightBoxStatus ? <CityLightBox></CityLightBox> : null}
      <DetailsOverview destination={destinationData}></DetailsOverview>
      <Cities
        destination={destinationData.name}
        cities={destinationCities}
      ></Cities>
      <Reviews reviews={destinationReviews}></Reviews>
      <Footer></Footer>
    </>
  );
}
