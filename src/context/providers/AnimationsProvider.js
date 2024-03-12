import React, { useEffect } from 'react';
import AnimationsContext from '../AnimationsContext';

export default function AnimationsProvider({ children }) {
  const scrollAnimations = () => {
    const elements = document.querySelectorAll('.animation');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect(); // getBoundingClientRect method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
      const viewportHeight = window.innerHeight;
      if (elementPosition.top < viewportHeight) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollAnimations);
  }, []);
  return (
    <AnimationsContext.Provider value={null}>
      {children}
    </AnimationsContext.Provider>
  );
}
