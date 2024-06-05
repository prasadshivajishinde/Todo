// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import taskReducer from './reducers/taskReducer';

const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
