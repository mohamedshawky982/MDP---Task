import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {transactions} from './slices';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['transactions'],
  blacklist: [],
};

const rootReducers = combineReducers({
  transactions,
});

const persistReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export const useTransactionsSelector = (state: RootState) => state.transactions;
