import {combineReducers} from 'redux';
import imagesReducer from './imagesReducer';

export const combinedReducers = combineReducers({"imagesReducer": imagesReducer});