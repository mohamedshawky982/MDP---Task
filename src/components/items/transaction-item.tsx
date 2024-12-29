import {StyleSheet, View} from 'react-native';
import {AppText} from '../atoms';
import {FC} from 'react';
import {ITransactionItem, TRANSATIONS} from '../../types';
import {formatDateTime} from '../../helpers';

const TranssactionItem: FC<ITransactionItem> = ({
  amount,
  description,
  transactionType,
  date,
  category,
}) => {
  const isIncome = transactionType === TRANSATIONS.INCOME;
  const transactionColor = {
    color: isIncome ? 'green' : 'red',
  };
  return (
    <View style={styles.container}>
      <View style={styles.circleConatiner}>
        <View style={styles.transactionCircle}>
          <AppText
            style={{
              color: isIncome ? 'green' : 'red',
            }}>
            {isIncome ? '+' : '-'}
          </AppText>
        </View>
      </View>
      <View style={styles.dataRow}>
        <View style={styles.transactionData}>
          <AppText numberOfLines={2}> {description}</AppText>
          <AppText> {category}</AppText>
        </View>
        <View style={[styles.transactionData, {alignItems: 'flex-end'}]}>
          <AppText style={{...transactionColor}}>
            {isIncome ? '+' : '-'}{' '}
            <AppText style={{fontWeight: '600'}}>{amount}</AppText>
          </AppText>
          <AppText> {formatDateTime(date)}</AppText>
        </View>
      </View>
    </View>
  );
};

export default TranssactionItem;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(242, 242, 242, 1)',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
  },
  circleConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataRow: {
    flex: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  transactionData: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
