import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppAddButton = ({title, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, {backgroundColor: colors[color]}]}>
      <MaterialCommunityIcons
        name="plus-box-multiple-outline"
        style={styles.icon}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default AppAddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: 60,
    height: 60,
    marginVertical: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  icon: {
    color: colors.white,
  },
});
