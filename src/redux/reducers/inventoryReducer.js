import { combineReducers } from 'redux';
import ORDER_ACTIONS from '../actions/orderActions';

const roastLevels = (state=[], action) => {
  switch (action.type) {
    case ORDER_ACTIONS.STORE_ROASTS:
      return action.payload.data;
    default:
      return state;
  }
}

const beansInStock = (state = [], action) => {
  switch (action.type) {
    case ORDER_ACTIONS.SET_INVENTORY:
      return action.payload.data
    default:
      return state;
  }
}

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  roastLevels,
  beansInStock,
});
