import React, { useReducer } from 'react';
import { reviews } from '../../data/reviews';
import ReviewsReducer from '../reducers/ReviewsReducer';
import ReviewsContext from '../ReviewsContext';

export default function ReviewsProvider({ children }) {
  const [state, dispatch] = useReducer(ReviewsReducer, {
    reviews,
  });
  return (
    <ReviewsContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
}
