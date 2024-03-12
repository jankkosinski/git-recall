import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

export default function LinksBox({ links, external }) {
  const location = useLocation();
  const scrollIfSamePage = (route) => {
    if (location.pathname === route)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    else window.scrollTo(0, 0);
  };
  return links.map((link) => (
    <div key={link.id} className='footer__link'>
      {external ? (
        <a href={link.route} target='_blank' rel='noreferrer'>
          <BiChevronRight size={'1.4rem'}></BiChevronRight> {link.name}
        </a>
      ) : (
        <Link onClick={() => scrollIfSamePage(link.route)} to={link.route}>
          <BiChevronRight size={'1.4rem'}></BiChevronRight> {link.name}
        </Link>
      )}
    </div>
  ));
}
