import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ContactDetails from '../layout/sections/ContactDetails';

export default function Contact() {
  const _title = 'Contact';
  const _intro_text = `Fell free to contact us if you have any specific questions or topics! We will help you as much as we can!`;
  return (
    <>
      <Helmet>
        <title>{_title}</title>
      </Helmet>
      <Header title={_title} intro_text={_intro_text}></Header>
      <ContactDetails></ContactDetails>
      <Footer></Footer>
    </>
  );
}
