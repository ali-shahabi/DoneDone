import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText, AppListItem} from '../components';

import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/redJacket.jpg')} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <AppListItem
            title="Lisa Rogers"
            subTitle="5 Listings"
            image={require('../assets/avatar.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.transparent, flex: 1},
  details: {padding: 20},
  image: {width: '100%', height: 300},
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {marginBottom: 7, fontSize: 24, fontWeight: '900'},
  userContainer: {marginVertical: 40},
});
