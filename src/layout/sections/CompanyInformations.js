import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SimpleSection from '../../components/SimpleSection';

export default function CompanyInformations() {
  const _title = 'About';
  const _description = `TripWithMe, the world's largest travel guidance platform, helps hundreds of millions of people each month become better travelers, from planning to booking to taking a trip. As a travel guidance company available in 43 markets and 22 languages, TripWithMe makes planning easy no matter the trip type.`;
  const _about_image = '/assets/images/about.jpg';
  return (
    <SimpleSection
      title={_title}
      description={_description}
      revert_order={true}
    >
      <LazyLoadImage
        className='company_informations__image animation'
        src={_about_image}
        alt={_about_image}
      />
    </SimpleSection>
  );
}
