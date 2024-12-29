import {FlatList, View} from 'react-native';
import {
  AppButton,
  AppInput,
  EmptyData,
  TransactionType,
} from '../../components';
import {useHomeController} from '../../hooks';
import styles from '../styles';
import {TranssactionItem} from '../../components';
import {TRANSATIONS} from '../../types';

const Home = () => {
  const {onAddTransctionPress, transactions, filter, onFilterPress} =
    useHomeController();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TransactionType showAll value={filter} onPress={onFilterPress} />
      </View>

      <FlatList
        data={
          filter === TRANSATIONS.ALL
            ? transactions
            : transactions?.filter(
                transaction => transaction.transactionType === filter,
              )
        }
        renderItem={({item}) => (
          <TranssactionItem
            transactionType={item?.transactionType}
            date={item?.date}
            amount={item?.amount}
            description={item?.description}
            category={item?.category}
          />
        )}
        ListEmptyComponent={() => <EmptyData />}
        ListHeaderComponent={() => (
          <View style={{width: '100%', alignItems: 'center'}}>
            <AppInput
              label="Date from"
              value=""
              onPress={() => {}}
              placeholder="Date from"
            />
            <AppInput
              label="Date to"
              value=""
              onPress={() => {}}
              placeholder="Date to"
            />
          </View>
        )}
      />

      <AppButton
        onPress={onAddTransctionPress}
        isLarge
        label={'Add new transaction'}
      />
    </View>
  );
};

export default Home;
