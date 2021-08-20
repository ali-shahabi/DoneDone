import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {AppSafeAreaView, AppCard, AppAddButton} from '../components';

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

const ListingsScreen = ({navigation}) => {
  return (
    <AppSafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Listing Details')}>
            <AppCard
              title={item.title}
              subTitle={'$' + item.price}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
      <AppAddButton onPress={() => navigation.navigate('Listing Edit')} />
    </AppSafeAreaView>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.grey_2},
  flatList: {paddingHorizontal: 20, paddingTop: 20},
  separator: {width: '100%'},
});
