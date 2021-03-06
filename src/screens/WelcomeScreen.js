import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {AppButton, AppLogo} from '../components';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/background1.jpg')}
      blurRadius={3}>
      <AppLogo text={"Give Away What You Don't Need Anymore!"} />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
  buttonsContainer: {width: '100%', padding: 20},
});
