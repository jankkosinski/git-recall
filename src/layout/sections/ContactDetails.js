import React from 'react';
import ContactForm from '../../components/ContactForm';
import SimpleSection from '../../components/SimpleSection';

export default function ContactDetails() {
  const _title = 'General Contact Information';
  const _description = `Are you a traveler in need of help?  Have a question about your review? Problems booking your hotel, flight or attraction/activity?  Trouble with a restaurant reservation? We want to help! Let's send us a request by the contact form. Describe the issue, leave us your email and submit the request. We will contact you as fast as possible!`;
  return (
    <SimpleSection title={_title} description={_description}>
      <ContactForm></ContactForm>
    </SimpleSection>
  );
}
