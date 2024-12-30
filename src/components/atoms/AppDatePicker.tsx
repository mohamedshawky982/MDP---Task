import {FC, Fragment} from 'react';
import DatePicker from 'react-native-date-picker';
import {IAppDatePicker} from '../../types';
import AppInput from './AppInput';
import {formatDateTime} from '../../helpers';
import moment from 'moment';

const AppDatePicker: FC<IAppDatePicker> = ({
  isVisible,
  onDateChange,
  onCancel,
  value,
  onPress,
  error,
  label,
}) => {
  return (
    <Fragment>
      <AppInput
        value={`${value ? formatDateTime(value) : ''}`}
        label={label ?? 'Date'}
        placeholder="Please, select a date"
        onChangeText={() => {}}
        onPress={onPress}
        error={error as any}
      />
      <DatePicker
        modal
        open={isVisible}
        mode="date"
        date={value ? new Date(value) : new Date()}
        onConfirm={date => {
          onDateChange(moment(date).format('YYYY-MM-DD') as any);
          onCancel();
        }}
        onCancel={onCancel}
      />
    </Fragment>
  );
  ``;
};

export default AppDatePicker;
