import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  container: {flex: 1, backgroundColor: colors.black},
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
