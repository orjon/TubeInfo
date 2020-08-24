import uuid from 'uuid';
// import { SET_ALERT, REMOVE_ALERT } from './types';

//dispatch is from thunk. Allows more than one action type to be dispatched.
export const setAlert = ( msg, alertType ) => dispatch => {
  const id = uuid.v4()
  dispatch({
    type: 'SET_ALERT',
    payload: { msg, alertType, id}
  })

}