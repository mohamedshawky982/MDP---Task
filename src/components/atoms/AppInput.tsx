import {FC} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {IAppInput} from '../../types';
import {COLORS} from '../../common';
import AppText from './AppText';

const AppInput: FC<IAppInput> = ({
  value,
  onChangeText,
  label,
  placeholder,
  KeyboardType,
  error,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.conatiner,
        {
          pointerEvents: onPress ? 'box-only' : undefined,
        },
      ]}
      onPress={onPress}
      disabled={!onPress}>
      <AppText style={{color: COLORS.darkGray, fontSize: 15}}>{label}</AppText>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={[styles.input, {borderColor: error ? 'red' : COLORS.primary}]}
        onChangeText={onChangeText}
        keyboardType={KeyboardType}
        editable={!onPress}
      />
      {error && <AppText style={{color: 'red', fontSize: 15}}>{error}</AppText>}
    </TouchableOpacity>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  conatiner: {
    width: '90%',
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 5,
  },
});
