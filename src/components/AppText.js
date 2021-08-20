import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../styles/defaultStyles';

const AppText = ({children, style, ...rest}) => {
  return (
    <Text {...rest} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
