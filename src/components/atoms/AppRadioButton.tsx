import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../common';
import AppText from './AppText';
import {FC} from 'react';
import {IAppRadioButton} from '../../types';

const AppRadioButton: FC<IAppRadioButton> = ({label, onPress, isActive}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.biggerCircle}>
        {isActive && <View style={styles.circle} />}
      </View>
      <AppText style={{color: COLORS.primary}}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default AppRadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biggerCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: COLORS.primary,
  },
});
