import { createStore, applyMiddleware } from 'redux';
import {combinedReducers} from '../reducer/combinedReducers';
import thunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(combinedReducers, applyMiddleware(thunk))
    return store
}