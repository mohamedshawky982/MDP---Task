import {useNavigation} from '@react-navigation/native';
import {useTransactionsSelector} from '../../state-management';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {TRANSATIONS} from '../../types';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const scheme = Yup.object().shape({
  from: Yup.date().required(''),
  to: Yup.date().required(''),
});
const useHomeController = () => {
  const navigation = useNavigation();
  const {transactions} = useSelector(useTransactionsSelector);
  const [filter, setFilter] = useState<TRANSATIONS>(TRANSATIONS.ALL);
  const {} = useFormik({
    initialValues: {
      from: '',
      to: '',
    },
    validationSchema: scheme,
    onSubmit: () => {},
  });

  const onAddTransctionPress = () => {
    navigation.navigate('AddTransation');
  };
  const onFilterPress = (value: TRANSATIONS) => {
    setFilter(value);
  };
  return {onAddTransctionPress, transactions, filter, onFilterPress};
};

export default useHomeController;
