import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topIconsContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={35} color={colors.white} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color={colors.white}
          />
        </View>
      </View>
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
  closeIcon: {position: 'absolute', left: 30, top: 30},
  container: {flex: 1, backgroundColor: colors.black},
  deleteIcon: {position: 'absolute', right: 30, top: 30},
  image: {
    width: '100%',
    height: '100%',
  },
  topIconsContainer: {
    width: '100%',
    height: 100,
    zIndex: 2,
    position: 'absolute',
    backgroundColor: colors.black,
  },
});
