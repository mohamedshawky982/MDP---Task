import {FC} from 'react';
import {View} from 'react-native';
import {IAppWhiteSpace} from '../../types';

const AppWhiteSpace: FC<IAppWhiteSpace> = ({variant = 1}) => {
  return <View style={{marginVertical: variant * 5}} />;
};

export default AppWhiteSpace;
