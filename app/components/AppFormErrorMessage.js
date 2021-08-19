import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
import {AppText} from '.';

const AppFormErrorMessage = ({error, touched}) => {
  if (!touched || !error) {
    return null;
  } else {
    return <AppText style={styles.error}>{error}</AppText>;
  }
};

export default AppFormErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 10,
    paddingHorizontal: 20,
    height: 15,
  },
});
