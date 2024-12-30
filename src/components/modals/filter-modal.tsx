import {FC, forwardRef, ForwardRefRenderFunction, useState} from 'react';
import BaseModal from './base-modal';
import {StyleSheet, View} from 'react-native';
import {AppButton, AppDatePicker, AppWhiteSpace} from '../atoms';
import {TransactionType} from '../sections';
import {IFilterModal, TRANSATIONS} from '../../types';

const FilterModal: ForwardRefRenderFunction<unknown, IFilterModal> = (
  props,
  ref: any,
) => {
  const {onSubmit} = props;
  const [filter, setFilter] = useState<TRANSATIONS>();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [isStartDateVisible, setIsStartDateVisible] = useState(false);
  const [isEndDateVisible, setIsEndDateVisible] = useState(false);

  const onSubmitPress = () => {
    onSubmit({
      filter,
      startDate,
      endDate,
    });
  };
  const onResetPress = () => {
    setFilter(undefined);
    setStartDate(null);
    setEndDate(null);
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
          onDateChange={date => setStartDate(date)}
          onPress={() => setIsStartDateVisible(true)}
          error=""
          label="Date from"
          value={startDate}
        />
        <AppWhiteSpace />

        <AppDatePicker
          isVisible={isEndDateVisible}
          onCancel={() => setIsEndDateVisible(false)}
          onDateChange={date => setEndDate(date)}
          onPress={() => setIsEndDateVisible(true)}
          error=""
          label="Date to"
          value={endDate}
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
