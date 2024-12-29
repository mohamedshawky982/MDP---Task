import {View} from 'react-native';
import styles from '../styles';
import {
  AppButton,
  AppDatePicker,
  AppInput,
  AppWhiteSpace,
  TransactionType,
} from '../../components';
import {useAddTransactionsController} from '../../hooks';

const AddTransation = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isDateVisible,
    setIsDateVisible,
    setFieldValue,
    touched,
  } = useAddTransactionsController();
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <AppWhiteSpace />
      <TransactionType
        value={values.transactionType}
        onPress={handleChange('transactionType')}
      />
      <AppWhiteSpace />
      <AppInput
        error={touched?.amount ? errors.amount : ''}
        value={values?.amount}
        placeholder="Please, enter an amount"
        onChangeText={handleChange('amount')}
        label="Amount"
        KeyboardType="number-pad"
      />
      <AppWhiteSpace />
      <AppInput
        error={touched?.category ? errors.category : ''}
        value={values?.category}
        placeholder="Please, enter an category"
        onChangeText={handleChange('category')}
        label="Category"
      />
      <AppWhiteSpace />
      <AppInput
        error={touched?.description ? errors.description : ''}
        value={values.description}
        label="Description"
        placeholder="Please, enter a description"
        onChangeText={handleChange('description')}
      />

      <AppWhiteSpace />
      <AppDatePicker
        value={values.date}
        isVisible={isDateVisible}
        onPress={() => setIsDateVisible(true)}
        onCancel={() => setIsDateVisible(false)}
        onDateChange={date => setFieldValue('date', date)}
        error={touched?.date ? errors.date : ''}
      />

      <AppWhiteSpace variant={10} />

      <AppButton isLarge label="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddTransation;
