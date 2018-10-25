import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import ORDER_ACTIONS from '../actions/orderActions';

// worker Saga: will be fired on "REGISTER" actions
function* chooseBean(action) {
  try {
    // gets individual bean information from server
    const bean = yield call(axios.get, `api/inventory/${action.payload}`);
    //Set bean in order to be submitted
    yield put({ type: ORDER_ACTIONS.SET_BEAN, payload: bean.data });
    // store chosen bean data for displaying on DOM
    yield put({ type: ORDER_ACTIONS.DISPLAY_BEAN_INFO, payload: bean.data[0]});
  } catch (error) {
    console.log('Bean selection error:', error);
  }
}

// worker Saga: will be fired on "REGISTER" actions
function* chooseRoast(action) {
  try {
    // gets bean information from server
    const roast = yield call(axios.get, `api/roasts/${action.payload}`);
    // set data for displaying on DOM
    yield put({ type: ORDER_ACTIONS.DISPLAY_ROAST_INFO, payload: roast.data[0] });
    //Store data with order to be submitted
    yield put({ type: ORDER_ACTIONS.SET_ROAST, payload: roast.data[0].id })
  } catch (error) {
    console.log('Roast selection error:', error);
  }
}

function* getInventory() {
  try {
    //get list of all beans currently in stock
    const inventory = yield call(axios.get, 'api/inventory');
    //store bean inventory list in redux store
    yield put({ type: ORDER_ACTIONS.SET_INVENTORY, payload: inventory })
  } catch (error) {
    console.log('Error getting bean inventory', error);
    
  }
}

function* getRoasts() {
  try {
    //get list of all available roasts from database
    const roastList = yield call(axios.get, 'api/roasts');
    //store list of all available roasts in redux store
    yield put({ type: ORDER_ACTIONS.STORE_ROASTS, payload: roastList })
  } catch (error) {
    console.log('Error getting roast inventory', error);

  }
}

function* submitOrder(action) {
  try {
    yield call(axios.post, '/api/orders', action.payload);
    yield put({ type: 'ORDER_SUCCEEDED' })
  } catch (error) {
    console.log('Error submitting order', error)
  }
}

function* orderSaga() {
  yield takeLatest(ORDER_ACTIONS.CHOOSE_BEAN, chooseBean);
  yield takeLatest(ORDER_ACTIONS.CHOOSE_ROAST, chooseRoast);
  yield takeLatest(ORDER_ACTIONS.FETCH_INVENTORY, getInventory);
  yield takeLatest(ORDER_ACTIONS.FETCH_ROASTS, getRoasts);
  yield takeLatest(ORDER_ACTIONS.SUBMIT_ORDER, submitOrder);
}

export default orderSaga;