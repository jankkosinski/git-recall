import { CLOSE_MODAL, OPEN_MODAL } from '../types/SignModalTypes';
const SignModalReducer = (state, action) => {
  if (action.type === OPEN_MODAL)
    return { modalStatus: true, payload: action.payload };
  else if (action.type === CLOSE_MODAL)
    return { modalStatus: false, payload: '' };
  else return state;
};

export default SignModalReducer;
