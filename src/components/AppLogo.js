import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../theme/colors';

const AppLogo = ({text}) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logoDoneDone.png')}
      />
      {text && <Text style={styles.logoText}>{text}</Text>}
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  logo: {width: 200, height: 200},
  logoContainer: {
    position: 'absolute',
    top: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.grey,
    position: 'relative',
    bottom: 30,
  },
});
