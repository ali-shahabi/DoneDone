import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  AppIcon,
  AppSafeAreaView,
  AppListItem,
  AppListItemSeparator,
} from '../components';

import colors from '../theme/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {name: 'format-list-bulleted', backgroundColor: colors.primary},
  },
  {
    title: 'My Messages',
    icon: {name: 'email', backgroundColor: colors.secondary},
  },
];

const AccountScreen = () => {
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
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={AppListItemSeparator}
          renderItem={({item}) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <AppListItem
          title="Log Out"
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
