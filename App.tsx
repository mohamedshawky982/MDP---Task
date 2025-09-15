import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from '@screens';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
