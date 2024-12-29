import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistedStore} from './src/state-management';
import {PersistGate} from 'redux-persist/integration/react';
import RootStack from './src/navigation/root-stack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
