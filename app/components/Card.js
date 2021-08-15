import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({image, title, price}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{price}</AppText>
      </View>
    </View>
  );
};

export default Card;

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
