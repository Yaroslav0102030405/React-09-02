// import { create } from 'json-server';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

// общий стейт
const rootReducer = combineReducers({
  counter: counterReducer,
});

// 1 шаг инциализировали стор
const store = createStore(rootReducer, composeWithDevTools());

export default store;
