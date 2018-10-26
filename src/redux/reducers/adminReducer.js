import { combineReducers } from 'redux';
import ORDER_ACTIONS from '../actions/orderActions';

const orderList = (state = [], action) => {
  switch (action.type) {
    case ORDER_ACTIONS.SET_ORDERS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  orderList,
});