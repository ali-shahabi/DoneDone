import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
          style={styles.deleteIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {zIndex: 1},
});
