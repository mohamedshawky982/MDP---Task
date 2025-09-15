import {StartLesson} from '@components';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import createStyle from '../styles';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const styles = createStyle(top);
  return (
    <View style={styles.container}>
      <StartLesson />
    </View>
  );
};

export default Home;
