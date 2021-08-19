import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const AppScreen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.appScreen, style]}>{children}</SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({appScreen: {flex: 1}});
