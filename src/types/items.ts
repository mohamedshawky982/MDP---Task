import {TRANSATIONS} from './enums';

export interface ITransactionItem {
  amount: string;
  transactionType: TRANSATIONS;
  description: string;
  date: string;
  category: string;
}
