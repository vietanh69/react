// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Import thunk from redux-thunk

import reducers from './reducers';

const rootReducer = combineReducers({
  todo: reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
