import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// var store = createStore(rootReducer, applyMiddleware(thunk));
var store = createStore(rootReducer, applyMiddleware(thunk));



//
export default store;
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
