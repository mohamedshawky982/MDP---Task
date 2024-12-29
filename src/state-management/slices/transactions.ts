import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../types';

interface IInitialState {
  transactions: ITransaction[];
}
const initialState: IInitialState = {
  transactions: [],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions = [...state.transactions, action.payload];
    },
  },
});

export const {addTransaction} = transactions.actions;
export default transactions.reducer;
