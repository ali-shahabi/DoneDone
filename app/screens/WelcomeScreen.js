import React from 'react';
import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background1.jpg')}
      blurRadius={3}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logoDoneDone.png')}
        />
        <Text style={styles.logoText}>
          Give Away What You Don't Need Anymore!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log('tapped')} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
  buttonsContainer: {width: '100%', padding: 20},
  logo: {width: 200, height: 200},
  logoContainer: {position: 'absolute', top: 10, alignItems: 'center'},
  logoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.gray,
    position: 'relative',
    bottom: 30,
  },
});
