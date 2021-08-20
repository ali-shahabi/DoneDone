import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormFieldInput,
  AppFormSubmitButton,
  AppSafeAreaView,
} from '../components';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const onSubmit = values => {
    console.log(values);
    Keyboard.dismiss();
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <AppForm
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <AppFormFieldInput
            name="username"
            placeholder="Name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            textContentType="name"
          />
          <AppFormFieldInput
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormFieldInput
            name="password"
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          <AppFormSubmitButton title="Register" />
        </AppForm>
      </View>
    </AppSafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {padding: 20},
  textInput: {flex: 1},
});
