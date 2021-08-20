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
    navigate: 'Listings',
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    navigate: 'Messages',
  },
];

const AccountScreen = ({navigation}) => {
  const handleNavigate = item => {
    if (item.title === 'My Messages') {
      navigation.navigate('Messages');
    }
    if (item.title === 'My Listings') {
      navigation.navigate('Listings');
    }
  };
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
              chevronIcon
              onPress={() => handleNavigate(item)}
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
