import { combineReducers } from 'redux';
import ORDER_ACTIONS from '../actions/orderActions';

// loginMessage holds the string that will display
// on the login screen if there's an error

//Should look like this:
// newOrder.toSubmit = {
//   "first_name": "Christopher",
//   "last_name": "Brenberg",
//   "street_address": "4011 41st Ave S",
//   "city": "Minneapolis",
//   "state": "MN",
//   "zipcode": "55406",
//   "phone": "651-325-8142",
//   "email": "cbrenberg@gmail.com",
//   "bean": 1,
//   "roast": 3,
//   "quantity": 8,
// },
const toSubmit = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.SET_BEAN:
      return {...state, bean: action.payload[0].id};
    case ORDER_ACTIONS.SET_ROAST:
      return { ...state, roast: action.payload };
    case ORDER_ACTIONS.SET_QUANTITY:
      return { ...state, quantity: action.payload };
    case ORDER_ACTIONS.SET_CUSTOMER_INFO:
      return { ...state, };
    default:
      return state;
  }
};


// registrationMessage holds the string that will display
// on the registration screen if there's an error
//SHOULD LOOK LIKE THIS:
// newOrder.orderToDisplay = {
//   "name": "Costa Rica Peaberry",
//   origin_description: "From the Monteverde region of Costa Rica, this shade-grown coffee is of the highest quality",
//   flavor_description: "Nutmeg, Cocoa, Hint of smoke",
//   image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4M1MKXvvxajgqVPMMktAPY8mYq7-huDqXQtwuZ6ZmVhICpdbHw",
//   "roast": "medium dark",
//   "quantity": 8,
//   "first_name": "Christopher",
//   "last_name": "Brenberg",
//   "street_address": "4011 41st Ave S",
//   "city": "Minneapolis",
//   "state": "MN",
//   "zipcode": "55406",
//   "phone": "651-325-8142",
//   "email": "cbrenberg@gmail.com",
// }

const toDisplay = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.DISPLAY_BEAN_INFO:
      return { ...state, bean: action.payload };
    case ORDER_ACTIONS.DISPLAY_ROAST_INFO:
      return { ...state, roast: action.payload };
    case ORDER_ACTIONS.DISPLAY_QUANTITY:
      return { ...state, quantity: action.payload };
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
  toSubmit,
  toDisplay,
});
