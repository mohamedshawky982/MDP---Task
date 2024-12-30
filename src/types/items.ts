import {TRANSATIONS} from './enums';

export interface ITransactionItem {
  amount: string;
  transactionType: TRANSATIONS;
  description: string;
  date: Date;
  category: string;
}
