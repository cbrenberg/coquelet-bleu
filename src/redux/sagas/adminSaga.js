import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import ORDER_ACTIONS from '../actions/orderActions';

// worker Saga: will be fired on "REGISTER" actions
function* getOrders() {
  try {
    yield console.log('orderSaga running');
    // gets list of all orders from server
    const orders = yield call(axios.get, `/api/orders`);
    // initiates storing list of orders in redux store
    yield put({ type: ORDER_ACTIONS.SET_ORDERS, payload: orders.data });
  } catch (error) {
    console.log('Error retrieving order list:', error);
  }
}

function* adminSaga() {
  yield takeLatest(ORDER_ACTIONS.GET_ORDERS, getOrders);
}

export default adminSaga;