import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IAppButton} from '../../types';
import {COLORS} from '../../common';
import AppText from './AppText';

const AppButton: FC<IAppButton> = ({onPress, style, label, isLarge}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width: isLarge ? '90%' : 'auto'}, style]}>
      <AppText style={{color: 'white'}}>{label}</AppText>
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
  },
});
