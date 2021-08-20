import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  AppIcon,
  AppSafeAreaView,
  AppListItem,
  AppListItemSeparator,
} from '../components';

import colors from '../theme/colors';

const AccountScreen = ({navigation}) => {
  return (
    <AppSafeAreaView style={styles.appSafeAreaView}>
      <View style={styles.container}>
        <AppListItem
          title="Lisa Rogers"
          subTitle="lisa.rogers@gmail.com"
          image={require('../assets/images/avatar.jpg')}
        />
      </View>
      <View style={styles.container}>
        <AppListItem
          title="My Listings"
          chevronIcon
          onPress={() => navigation.navigate('Listings')}
          IconComponent={
            <AppIcon
              name="format-list-bulleted"
              backgroundColor={colors.primary}
            />
          }
        />
        <AppListItemSeparator />
        <AppListItem
          title="My Messages"
          chevronIcon
          onPress={() => navigation.navigate('Messages')}
          IconComponent={
            <AppIcon name="email" backgroundColor={colors.secondary} />
          }
        />
      </View>
      <View style={styles.container}>
        <AppListItem
          title="Log Out"
          onPress={() => navigation.navigate('Welcome')}
          IconComponent={
            <AppIcon name="logout" backgroundColor={colors.yellow} />
          }
        />
      </View>
    </AppSafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  appSafeAreaView: {backgroundColor: colors.grey_2},
  container: {marginVertical: 20},
});
