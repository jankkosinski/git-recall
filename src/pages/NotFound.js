import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function NotFound() {
  const _title = 'Oops, 404';
  const _intro_text = `This page does not exist, please follow the navigation to reach our content!`;
  const _image = '/assets/images/404.jpg';
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Header
        title={_title}
        intro_text={_intro_text}
        video_path={''}
        poster_path={_image}
      ></Header>
      <Footer></Footer>
    </>
  );
}
