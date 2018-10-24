import { combineReducers } from 'redux';
import ORDER_ACTIONS from '../actions/orderActions';

// loginMessage holds the string that will display
// on the login screen if there's an error
const inventory = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.SET_BEAN:
      return action.payload[0];
    case ORDER_ACTIONS.SET_ROAST:
      return {...state, roast: action.payload};
    case ORDER_ACTIONS.SET_QUANTITY:
      return {...state, quantity: action.payload};
    case ORDER_ACTIONS.SET_CUSTOMER_INFO:
      return {...state, };
    default:
      return state;
  }
};

// const beanList = (state = [], action) => {
//   switch (action.type) {
//     case ORDER_ACTIONS.SET_INVENTORY:
//       return action.payload.data
//     default:
//       return state;
//   }
// }

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const orderToDisplay = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.DISPLAY_BEAN_INFO:
      return {...state, bean: action.payload};
    case ORDER_ACTIONS.DISPLAY_ROAST_INFO:
      return {...state, roast: action.payload};
    case ORDER_ACTIONS.DISPLAY_QUANTITY:
      return {...state, quantity: action.payload};
    default:
      return state;
  }
};

// const orderProgress = (state={progress: 0}, action) => {
//   switch (action.type) {
//     case ORDER_ACTIONS.UPDATE_PROGRESS:
//       return {progress: action.payload}
//     default:
//       return state;
//   }
// }

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  inventory,
  orderToDisplay,
});
