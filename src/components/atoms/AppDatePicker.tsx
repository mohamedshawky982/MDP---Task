import {FC, Fragment} from 'react';
import DatePicker from 'react-native-date-picker';
import {IAppDatePicker} from '../../types';
import AppInput from './AppInput';
import {formatDateTime} from '../../helpers';

const AppDatePicker: FC<IAppDatePicker> = ({
  isVisible,
  onDateChange,
  onCancel,
  value,
  onPress,
  error,
}) => {
  return (
    <Fragment>
      <AppInput
        value={`${value ? formatDateTime(value) : ''}`}
        label="Date"
        placeholder="Please, select a date"
        onChangeText={() => {}}
        onPress={onPress}
        error={error as any}
      />
      <DatePicker
        modal
        open={isVisible}
        date={new Date()}
        onConfirm={date => {
          onDateChange(date as any);
          onCancel();
        }}
        onCancel={onCancel}
      />
    </Fragment>
  );
};

export default AppDatePicker;
