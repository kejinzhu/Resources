import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import reduxLogger from 'redux-logger';
// import reduxThunk from 'redux-chunk';
import reduxPromise from 'redux-promise';
let store = createStore(reducer,applyMiddleware(reduxLogger,reduxPromise));
export default store;
