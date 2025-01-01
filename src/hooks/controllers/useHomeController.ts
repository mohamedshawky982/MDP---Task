import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useTransactionsSelector} from '../../state-management';
import {IModalRef, IOnSubmitFilterParams, TRANSATIONS} from '../../types';

const useHomeController = () => {
  const navigation = useNavigation();
  const filterRef = useRef<IModalRef>();
  const {transactions} = useSelector(useTransactionsSelector);
  const [filter, setFilter] = useState<TRANSATIONS>();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isDateSelected = !!(startDate && endDate);
  const displayFilteredData = !!filter || !!(startDate && endDate);
  const _renderDateCondition = (date: Date) =>
    new Date(startDate!) <= new Date(date) &&
    new Date(endDate!) >= new Date(date);

  const filteredTransactions = displayFilteredData
    ? transactions?.filter(transaction =>
        isDateSelected && !!filter
          ? transaction.transactionType === filter &&
            _renderDateCondition(transaction?.date)
          : !!filter
          ? transaction.transactionType === filter
          : _renderDateCondition(transaction?.date),
      )
    : transactions;
  const onAddTransctionPress = () => {
    navigation.navigate('AddTransation');
  };
  const onFilterPress = () => {
    openFilterModal();
  };

  const openFilterModal = () => {
    filterRef?.current?.openModal();
  };
  const closeFilterModal = () => {
    filterRef?.current?.closeModal();
  };
  const onSubmitFilter = (values: IOnSubmitFilterParams) => {
    setFilter(values?.filter);
    setStartDate(values?.startDate);
    setEndDate(values?.endDate);
    closeFilterModal();
  };

  return {
    onAddTransctionPress,
    onFilterPress,
    filterRef,
    onSubmitFilter,
    filteredTransactions,
    filter,
    startDate,
    endDate,
  };
};

export default useHomeController;
