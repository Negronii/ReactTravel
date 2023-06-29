import {configureStore, combineReducers} from '@reduxjs/toolkit';
import languageReducer from './language/languageReducer';
import recommendProducgsReducer from './recommendProducts/recommendProductsReducer';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProducgsReducer,
});


// Configure the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export default store;
