import {useNavigation} from '@react-navigation/native';
import {useTransactionsSelector} from '../../state-management';
import {useSelector} from 'react-redux';
import {useRef, useState} from 'react';
import {
  IFilterModal,
  IModalRef,
  IOnSubmitFilterParams,
  TRANSATIONS,
} from '../../types';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const scheme = Yup.object().shape({
  from: Yup.date().required(''),
  to: Yup.date().required(''),
});
const useHomeController = () => {
  const navigation = useNavigation();
  const filterRef = useRef<IModalRef>();
  const {transactions} = useSelector(useTransactionsSelector);
  const [filter, setFilter] = useState<TRANSATIONS>();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onAddTransctionPress = () => {
    navigation.navigate('AddTransation');
  };
  const onFilterPress = () => {
    openFilterModal();
  };
  const onFilterChange = (value: TRANSATIONS) => {
    setFilter(value);
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
    transactions,
    filter,
    onFilterPress,
    filterRef,
    onFilterChange,
    startDate,
    onSubmitFilter,
    endDate,
  };
};

export default useHomeController;
