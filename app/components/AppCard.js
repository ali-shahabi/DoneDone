import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import {AppText} from '.';

const AppCard = ({image, title, subTitle}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {borderRadius: 15, backgroundColor: colors.white, marginBottom: 20},
  detailsContainer: {padding: 20},
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  subTitle: {color: colors.secondary, fontWeight: 'bold'},
  title: {marginBottom: 7},
});
