import { combineReducers } from 'redux';
import ORDER_ACTIONS from '../actions/orderActions';


//toSubmit object in redux
// Should look like this:
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
    case ORDER_ACTIONS.UPDATE_CONTACT_INFO:
      return { ...state, ...action.payload};
    case ORDER_ACTIONS.SET_COST:
      return { ...state, cost: action.payload }
    default:
      return state;
  }
};


// toDisplay reducer object
// SHOULD LOOK LIKE THIS IN REDUX STORE:
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
    case ORDER_ACTIONS.SET_COST:
      return { ...state, cost: action.payload }
    default:
      return state;
  }
};

// make one object that has keys toSubmit, toDisplay
// these will be on the redux state at:
// state.newOrder.toSubmit and state.newOrder.toDisplay
export default combineReducers({
  toSubmit,
  toDisplay,
});
