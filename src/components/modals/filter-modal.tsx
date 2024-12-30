import {FC, forwardRef, ForwardRefRenderFunction, useState} from 'react';
import BaseModal from './base-modal';
import {StyleSheet, View} from 'react-native';
import {AppButton, AppDatePicker, AppWhiteSpace} from '../atoms';
import {TransactionType} from '../sections';
import {IFilterModal, TRANSATIONS} from '../../types';
import {useFormik} from 'formik';
import * as yup from 'yup';

const scheme = yup.object().shape({
  startDate: yup.string().optional(),
  endDate: yup.date().when('startDate', (startDate, schema) => {
    if (startDate) return schema.required('Enter a valid to date');
    return schema;
  }),
});
const FilterModal: ForwardRefRenderFunction<unknown, IFilterModal> = (
  props,
  ref: any,
) => {
  const {onSubmit} = props;
  const [filter, setFilter] = useState<TRANSATIONS>();

  const {values, resetForm, setFieldValue, errors, isValid, touched} =
    useFormik({
      initialValues: {
        startDate: '',
        endDate: '',
      },
      validationSchema: scheme,
      onSubmit: () => {},
    });
  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);

  const [isStartDateVisible, setIsStartDateVisible] = useState(false);
  const [isEndDateVisible, setIsEndDateVisible] = useState(false);

  const onSubmitPress = () => {
    if (isValid)
      onSubmit({
        filter,
        startDate: values?.startDate as any,
        endDate: values?.endDate as any,
      });
  };
  const onResetPress = () => {
    setFilter(undefined);
    resetForm();
    onSubmit({
      filter: undefined,
      startDate: null,
      endDate: null,
    });
  };
  return (
    <BaseModal ref={ref}>
      <AppWhiteSpace />
      <View style={styles.container}>
        <View style={styles.row}>
          <TransactionType showAll value={filter} onPress={setFilter} />
        </View>
        <AppDatePicker
          isVisible={isStartDateVisible}
          onCancel={() => setIsStartDateVisible(false)}
          onDateChange={date => setFieldValue('startDate', date)}
          onPress={() => setIsStartDateVisible(true)}
          error={errors?.startDate}
          label="Date from"
          value={values?.startDate as any}
        />
        <AppWhiteSpace />

        <AppDatePicker
          isVisible={isEndDateVisible}
          onCancel={() => setIsEndDateVisible(false)}
          onDateChange={date => setFieldValue('endDate', date)}
          onPress={() => setIsEndDateVisible(true)}
          error={errors?.endDate}
          label="Date to"
          value={values?.endDate as any}
        />
      </View>
      <AppWhiteSpace />
      <AppButton label="Submit" isLarge onPress={onSubmitPress} />
      <AppWhiteSpace />
      <AppButton label="Reset" isLarge onPress={onResetPress} />
    </BaseModal>
  );
};

export default forwardRef(FilterModal);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
