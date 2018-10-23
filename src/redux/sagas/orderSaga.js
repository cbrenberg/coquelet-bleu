import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import ORDER_ACTIONS from '../actions/orderActions';

// worker Saga: will be fired on "REGISTER" actions
function* chooseBean(action) {
  try {
    // gets bean information from server
    const inventory = yield call(axios.get, `api/inventory/${action.payload}`);
    yield console.log(inventory.data[0].name);
    //TODO: write /inventory GET route with params
    yield put({ type: ORDER_ACTIONS.SET_BEAN, payload: inventory.data[0] });

    // set data for displaying on DOM
    yield put({ type: ORDER_ACTIONS.DISPLAY_BEAN_INFO, payload: inventory.data[0]});

  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* orderSaga() {
  yield takeLatest(ORDER_ACTIONS.CHOOSE_BEAN, chooseBean);
}

export default orderSaga;