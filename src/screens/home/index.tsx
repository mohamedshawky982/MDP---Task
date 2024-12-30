import {FlatList, View} from 'react-native';
import {
  AppButton,
  EmptyData,
  FilterModal,
  TranssactionItem,
} from '../../components';
import {useHomeController} from '../../hooks';
import {TRANSATIONS} from '../../types';
import styles from '../styles';
import {useMemo} from 'react';
import moment from 'moment';

const Home = () => {
  const {
    onAddTransctionPress,
    transactions,
    filter,
    onFilterPress,
    filterRef,
    onSubmitFilter,
    startDate,
    endDate,
  } = useHomeController();
  const filteredTransactions =
    !!filter || !!(startDate && endDate)
      ? transactions?.filter(transaction =>
          !!(startDate && endDate)
            ? transaction.transactionType === filter &&
              new Date(startDate!) <= new Date(transaction?.date) &&
              new Date(endDate!) >= new Date(transaction?.date)
            : transaction.transactionType === filter,
        )
      : transactions;

  return (
    <View style={styles.container}>
      <AppButton label="Filter" isLarge onPress={onFilterPress} />

      <FlatList
        data={filteredTransactions}
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
      />

      <AppButton
        onPress={onAddTransctionPress}
        isLarge
        label={'Add new transaction'}
      />

      <FilterModal ref={filterRef} onSubmit={onSubmitFilter} />
    </View>
  );
};

export default Home;
