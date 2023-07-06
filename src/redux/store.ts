import {configureStore, combineReducers} from '@reduxjs/toolkit';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import { actionLog } from './middlewares/actionLog';
import { ProductDetailSlice } from './productDetails/slice';
import { productSearchSlice } from './productSearch/slice';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetails: ProductDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
});

// Configure the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
