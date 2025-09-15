import {StyleSheet} from 'react-native';
const createStyle = (topInsets: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: topInsets,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });
export default createStyle;
