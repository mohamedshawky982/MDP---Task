import {FlatList, View} from 'react-native';
import {
  AppButton,
  EmptyData,
  FilterModal,
  TranssactionItem,
} from '../../components';
import {useHomeController} from '../../hooks';
import styles from '../styles';

const Home = () => {
  const {
    onAddTransctionPress,
    onFilterPress,
    filterRef,
    onSubmitFilter,
    filteredTransactions,
    filter,
    startDate,
    endDate,
  } = useHomeController();

  return (
    <View style={styles.container}>
      <AppButton
        label="Filter"
        style={{alignSelf: 'flex-start', marginLeft: 10, marginTop: 10}}
        onPress={onFilterPress}
        badgeNumber={
          filter && startDate && endDate
            ? 2
            : filter || (startDate && endDate)
            ? 1
            : undefined
        }
      />
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
