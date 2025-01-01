import {FormikErrors} from 'formik';
import {ReactNode} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IAppButton {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disableds?: boolean;
  label: string;
  isLarge?: boolean;
  isOutLined?: boolean;
  badgeNumber?: number;
}

export interface IAppText {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export interface IAppInput {
  value: string;
  onChangeText?: (value: string) => void;
  placeholder: string;
  label: string;
  KeyboardType?: KeyboardTypeOptions;
  error?: string;
  onPress?: () => void;
}

export interface IAppWhiteSpace {
  variant?: number;
}

export interface IAppRadioButton {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export interface IAppDatePicker {
  value: Date | null;
  isVisible: boolean;
  onCancel: () => void;
  onDateChange: (value: Date) => void;
  onPress: () => void;
  error: FormikErrors<Date> | undefined;
  label?: string;
}
