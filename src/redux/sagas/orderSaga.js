import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import ORDER_ACTIONS from '../actions/orderActions';

// worker Saga: will be fired on "REGISTER" actions
function* chooseBean(action) {
  try {
    // gets bean information from server
    const bean = yield call(axios.get, `api/inventory/${action.payload}`);
    //TODO: write /inventory GET route with params

    yield put({ type: ORDER_ACTIONS.SET_BEAN, payload: bean.data });

    // set data for displaying on DOM
    yield put({ type: ORDER_ACTIONS.DISPLAY_BEAN_INFO, payload: bean.data[0]});

  } catch (error) {
    console.log('Error with user registration:', error);
  }
}

function* getInventory(action) {
  try {
    const inventory = yield call(axios.get, 'api/inventory');
    yield put({ type: ORDER_ACTIONS.SET_INVENTORY, payload: inventory })
  } catch (error) {
    console.log('Error getting inventory', error);
    
  }
}

function* orderSaga() {
  yield takeLatest(ORDER_ACTIONS.CHOOSE_BEAN, chooseBean);
  yield takeLatest(ORDER_ACTIONS.FETCH_INVENTORY, getInventory);
}

export default orderSaga;