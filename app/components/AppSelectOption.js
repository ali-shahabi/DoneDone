import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppSelectOption = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AppSelectOption;

const styles = StyleSheet.create({text: {padding: 20, fontSize: 16}});
