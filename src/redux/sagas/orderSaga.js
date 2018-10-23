import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ORDER_ACTIONS from '../actions/orderActions';

// worker Saga: will be fired on "REGISTER" actions
function* chooseBean(action) {
  try {
    // gets bean information from server
    const inventory = yield axios.get(`api/inventory/${action.payload.id}`);
    // clear any existing error on the registration page
    yield put({ type: ORDER_ACTIONS.SET_BEAN, payload: inventory.data });

    // automatically log a user in after registration
    yield put({ type: ORDER_ACTIONS.DISPLAY_BEAN_INFO, payload: inventory.data});

  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* orderSaga() {
  yield takeLatest(ORDER_ACTIONS.CHOOSE_BEAN, chooseBean);
}

export default orderSaga;