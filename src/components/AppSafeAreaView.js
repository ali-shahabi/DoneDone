import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const AppSafeAreaView = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.appScreen, style]}>{children}</SafeAreaView>
  );
};

export default AppSafeAreaView;

const styles = StyleSheet.create({appScreen: {flex: 1}});
