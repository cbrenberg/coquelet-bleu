import ORDER_ACTIONS from '../actions/orderActions';

const orderProgress = (state = { value: 0, success: false }, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.UPDATE_PROGRESS:
      return { ...state, value: action.payload };
    case ORDER_ACTIONS.ORDER_SUCCEEDED:
      return { ...state, success: true };
    case ORDER_ACTIONS.RESET_ORDER:
      return { value: 0, success: false };
    default:
      return state;
  }
}

export default orderProgress;