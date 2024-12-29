import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddTransation, Home} from '../screens';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTransation" component={AddTransation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootStack;
