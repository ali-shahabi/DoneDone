import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AppScreen, AppCard} from '../components';

import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red Jacket for sale',
    price: 100,
    image: require('../assets/redJacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
  {
    id: 3,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <>
            <AppCard
              title={item.title}
              subTitle={'$' + item.price}
              image={item.image}
            />
          </>
        )}
      />
    </AppScreen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.grey_2},
  flatList: {paddingHorizontal: 20, paddingTop: 20},
  separator: {width: '100%'},
});
