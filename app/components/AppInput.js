import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/defaultStyles';
import {AppIcon} from '.';

const AppInput = ({icon, ...rest}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <AppIcon
          name={icon}
          backgroundColor={colors.transparent}
          iconColor={colors.grey_1}
          size={40}
        />
      )}
      <TextInput style={defaultStyles.text} {...rest} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_2,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
});
