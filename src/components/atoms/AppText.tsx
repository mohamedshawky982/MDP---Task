import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {IAppText} from '../../types';

const AppText: FC<IAppText> = ({children, style, numberOfLines}) => {
  return (
    <Text style={[styles.txt, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Cairo',
  },
});
