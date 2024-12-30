import {useFormik} from 'formik';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {addTransaction} from '../../state-management/slices/transactions';
import {TRANSATIONS} from '../../types';
import {useNavigation} from '@react-navigation/native';

const scehme = Yup.object().shape({
  amount: Yup.number().required('Enter a valid number'),
  category: Yup.string().required('Enter a valid category'),
  description: Yup.string().required('Enter a valid description'),
  date: Yup.date().required('Enter a valid date'),
});

const useAddTransactionsController = () => {
  const [isDateVisible, setIsDateVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {values, handleChange, handleSubmit, errors, setFieldValue, touched} =
    useFormik({
      initialValues: {
        amount: '',
        description: '',
        category: '',
        transactionType: TRANSATIONS.INCOME,
        date: new Date(),
      },
      validationSchema: scehme,
      onSubmit: () => handleOnSubmit(),
    });

  const handleOnSubmit = () => {
    dispatch(addTransaction(values));
    navigation.goBack();
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    setIsDateVisible,
    isDateVisible,
    setFieldValue,
    touched,
  };
};

export default useAddTransactionsController;
