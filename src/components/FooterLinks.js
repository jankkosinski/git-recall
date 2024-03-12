import React, { useContext } from 'react';
import DestinationsContext from '../context/DestinationsContext';
import { links } from '../data/links';
import LinksBox from './LinksBox';

export default function FooterLinks() {
  const {
    state: { destinations },
  } = useContext(DestinationsContext);

  const destinationsLinks = destinations.map((destination) => ({
    id: destination.id,
    name: destination.name,
    route: `/details/${destination.id}`,
  }));
  const { headings, pages, partners } = links;

  return (
    <div className='footer__links'>
      <div className='row'>
        <div className='col-4 animation'>
          <div className='footer__links__header'>{headings.pages}</div>
          <div className='footer__links__body'>
            <LinksBox links={pages}></LinksBox>
          </div>
        </div>
        <div className='col-4 animation'>
          <div className='footer__links__header'>{headings.partners}</div>
          <div className='footer__links__body'>
            <LinksBox links={partners} external={true}></LinksBox>
          </div>
        </div>
        <div className='col-4 animation'>
          <div className='footer__links__header'>{headings.destinations}</div>
          <div className='footer__links__body'>
            <LinksBox links={destinationsLinks}></LinksBox>
          </div>
        </div>
      </div>
    </div>
  );
}
