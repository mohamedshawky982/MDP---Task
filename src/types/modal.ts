import {ReactNode} from 'react';
import {TRANSATIONS} from './enums';

export interface IBaseModal {
  children: ReactNode;
}

export interface IModalRef {
  openModal: () => void;
  closeModal: () => void;
}

export interface IOnSubmitFilterParams {
  filter: TRANSATIONS | undefined;
  startDate: Date | null;
  endDate: Date | null;
}
export interface IFilterModal {
  onSubmit: ({filter}: IOnSubmitFilterParams) => void;
}
