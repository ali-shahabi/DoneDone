import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.listingDetailsContainer}>
      <Image source={require('../assets/redJacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {padding: 20},
  image: {width: '100%', height: 300},
  listingDetailsContainer: {backgroundColor: colors.transparent, flex: 1},
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {marginBottom: 7, fontSize: 24, fontWeight: '900'},
});
