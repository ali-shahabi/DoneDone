import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../theme/colors';

const AppListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default AppListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: colors.grey_2,
  },
});
