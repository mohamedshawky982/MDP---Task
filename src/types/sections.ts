import {TRANSATIONS} from './enums';

export interface ITransactionType {
  value: TRANSATIONS;
  onPress: (value: TRANSATIONS) => void;
  showAll?: boolean;
}
