/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountScreen,
  ListingDetailsScreen,
  ListingEditScreen,
  ListingsScreen,
  LoginScreen,
  MessagesScreen,
  RegisterScreen,
  ViewImageScreen,
  WelcomeScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
        <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
        <Stack.Screen name="View Image" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
