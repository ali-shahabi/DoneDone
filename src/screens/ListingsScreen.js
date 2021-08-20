import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AppSafeAreaView, AppCard} from '../components';

import colors from '../theme/colors';

const listings = [
  {
    id: 1,
    title: 'Red Jacket for sale',
    price: 100,
    image: require('../assets/images/redJacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/images/couch.jpg'),
  },
  {
    id: 3,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/images/couch.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <AppSafeAreaView style={styles.container}>
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
    </AppSafeAreaView>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.grey_2},
  flatList: {paddingHorizontal: 20, paddingTop: 20},
  separator: {width: '100%'},
});
