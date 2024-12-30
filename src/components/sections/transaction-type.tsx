import {StyleSheet, View} from 'react-native';
import {AppRadioButton} from '../atoms';
import {FC} from 'react';
import {ITransactionType, TRANSATIONS} from '../../types';

const TransactionType: FC<ITransactionType> = ({value, onPress, showAll}) => {
  return (
    <View style={styles.container}>
      <AppRadioButton
        label={'Income'}
        isActive={TRANSATIONS.INCOME === value}
        onPress={() => onPress(TRANSATIONS.INCOME)}
      />
      <AppRadioButton
        label={'Expense'}
        isActive={TRANSATIONS.EXPENSES === value}
        onPress={() => onPress(TRANSATIONS.EXPENSES)}
      />
    </View>
  );
};

export default TransactionType;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
