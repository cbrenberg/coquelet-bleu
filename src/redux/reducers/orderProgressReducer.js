import ORDER_ACTIONS from '../actions/orderActions';

const orderProgress = (state = { value: 0 }, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.UPDATE_PROGRESS:
      return { value: action.payload }
    default:
      return state;
  }
}

export default orderProgress;