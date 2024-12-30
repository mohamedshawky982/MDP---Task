import {TRANSATIONS} from './enums';

export interface ITransaction {
  transactionType: TRANSATIONS;
  amount: string;
  category: string;
  description: string;
  date: Date;
}
