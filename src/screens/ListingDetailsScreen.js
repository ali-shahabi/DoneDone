import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText, AppListItemDetailsInfo} from '../components';

import colors from '../theme/colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/redJacket.jpg')}
        style={styles.image}
      />
      <View style={styles.details}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <AppListItemDetailsInfo
            title="Lisa Rogers"
            subTitle="5 Listings"
            image={require('../assets/images/avatar.jpg')}
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
  },
  title: {fontSize: 24, fontWeight: '900'},
  userContainer: {marginVertical: 40},
});
