import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
  AppLogo,
  AppScreen,
} from '../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const [logoDisplay, setLogoDisplay] = useState(true);

  const onSubmit = values => {
    console.log(values);
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setLogoDisplay(0));
    Keyboard.addListener('keyboardDidHide', () => setLogoDisplay(1));
  }, []);

  return (
    <AppScreen style={styles.container}>
      <View style={logoDisplay ? styles.logoVisible : styles.logoHidden}>
        <AppLogo />
      </View>
      <View style={styles.textInput}>
        <AppForm
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            onFocus={() => setLogoDisplay(false)}
          />
          <AppFormField
            name="password"
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            onFocus={() => setLogoDisplay(false)}
          />
          <AppFormSubmitButton title="Login" />
        </AppForm>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {padding: 20},
  logoHidden: {flex: 0, display: 'none'},
  logoVisible: {flex: 1},
  textInput: {flex: 2},
});
