import {FC, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IAppButton} from '../../types';
import {COLORS} from '../../common';
import AppText from './AppText';

const AppButton: FC<IAppButton> = ({
  onPress,
  style,
  label,
  isLarge,
  isOutLined,
  badgeNumber,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width: isLarge ? '90%' : 'auto',
          borderWidth: isOutLined ? 1 : 0,
          backgroundColor: isOutLined ? 'white' : COLORS.primary,
        },
        style,
      ]}>
      <AppText style={{color: isOutLined ? COLORS.primary : 'white'}}>
        {label}
      </AppText>
      {badgeNumber && (
        <View style={styles.badge}>
          <AppText style={{fontSize: 12}}>{badgeNumber}</AppText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: COLORS.primary,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
