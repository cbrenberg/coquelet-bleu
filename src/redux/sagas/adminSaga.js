import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
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

function* addInventory(action) {
  try {
    const newId = yield call(axios.post, '/api/inventory', action.payload.beanData);
    const roastData = {roasts: action.payload.roastLevels, id: newId.data.id};//USE THIS FOR DEALING WITH SECOND POST
    yield call(axios.post, '/api/inventory/roasts', roastData);
  } catch (error) {
    console.log('Error retrieving order list:', error);
  }
}

function* editInventory(action) {
  try {
    yield call(axios.put, '/api/inventory', action.payload);
    yield toast('Inventory updated!');
    yield put({ type: ORDER_ACTIONS.FETCH_INVENTORY})
  } catch (error) {
    toast.warning('Error updating inventory. Try again.')
    console.log('Error updating inventory:', error);
  }
}

function* adminSaga() {
  yield takeLatest(ORDER_ACTIONS.GET_ORDERS, getOrders);
  yield takeLatest(ORDER_ACTIONS.ADD_INVENTORY, addInventory);
  yield takeLatest(ORDER_ACTIONS.EDIT_INVENTORY, editInventory);
  yield takeLatest(ORDER_ACTIONS.FETCH_INVENTORY, getInventory);
}

export default adminSaga;