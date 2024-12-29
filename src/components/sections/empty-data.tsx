import {StyleSheet, View} from 'react-native';
import {AppText} from '../atoms';

const EmptyData = () => {
  return (
    <View style={styles.container}>
      <AppText>No Data Available</AppText>
    </View>
  );
};

export default EmptyData;

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
