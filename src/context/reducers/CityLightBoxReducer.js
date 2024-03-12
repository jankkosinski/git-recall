import { CLOSE_LIGHTBOX, OPEN_LIGHTBOX } from '../types/CityLightBoxTypes';
export const CityLightBoxReducer = (state, action) => {
  if (action.type === OPEN_LIGHTBOX)
    return { lightBoxStatus: true, payload: action.payload };
  else if (action.type === CLOSE_LIGHTBOX)
    return { lightBoxStatus: false, payload: '' };
  else return state;
};
