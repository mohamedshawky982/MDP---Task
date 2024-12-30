import {TRANSATIONS} from './enums';

export interface ITransactionType {
  value: TRANSATIONS | undefined;
  onPress: (value: TRANSATIONS) => void;
  showAll?: boolean;
}
