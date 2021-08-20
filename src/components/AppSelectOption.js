import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import firstLetterToUpperCase from '../utils/firstLetterToUpperCase';
import {AppIcon} from '.';
import colors from '../theme/colors';

const AppSelectOption = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}>
      {item.icon && (
        <AppIcon
          name={item.icon}
          backgroundColor={item.iconBackgroundColor}
          iconColor={colors.white}
          size={80}
        />
      )}
      <Text style={styles.text}>{firstLetterToUpperCase(item.label)}</Text>
    </TouchableOpacity>
  );
};

export default AppSelectOption;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '33%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {fontSize: 16, paddingTop: 10, textAlign: 'center'},
});
