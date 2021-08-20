import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormFieldInput,
  AppFormSubmitButton,
  AppSafeAreaView,
  AppFormFieldSelect,
} from '../components';
import colors from '../theme/colors';

const items = [
  {
    id: 1,
    label: 'clothing',
    icon: 'hanger',
    iconBackgroundColor: colors.darkSlateBlue,
  },
  {
    id: 2,
    label: 'digital',
    icon: 'laptop',
    iconBackgroundColor: colors.orange,
  },
  {
    id: 3,
    label: 'furniture',
    icon: 'sofa-single-outline',
    iconBackgroundColor: colors.danger,
  },
  {
    id: 4,
    label: 'cars',
    icon: 'car-outline',
    iconBackgroundColor: colors.darkOrange,
  },
  {
    id: 5,
    label: 'games',
    icon: 'controller-classic-outline',
    iconBackgroundColor: colors.secondary,
  },
  {
    id: 6,
    label: 'sports',
    icon: 'basketball',
    iconBackgroundColor: colors.green,
  },
  {
    id: 7,
    label: 'movies',
    icon: 'movie-open',
    iconBackgroundColor: colors.aquamarine,
  },
  {
    id: 8,
    label: 'music',
    icon: 'music-note-eighth',
    iconBackgroundColor: colors.brown,
  },
  {
    id: 9,
    label: 'books',
    icon: 'book-open-variant',
    iconBackgroundColor: colors.blueVelvet,
  },
  {
    id: 10,
    label: 'other',
    icon: 'dots-horizontal',
    iconBackgroundColor: colors.cornflowerBlue,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().min(1).max(10000).required().label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const ListingEditScreen = ({navigation}) => {
  const onSubmit = values => {
    console.log(values);
    Keyboard.dismiss();
    navigation.navigate('Listings');
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            category: null,
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <AppFormFieldInput
            name="title"
            placeholder="Title"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            textContentType="name"
            maxLength={255}
          />
          <AppFormFieldInput
            name="price"
            placeholder="Price"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={8}
          />
          <AppFormFieldSelect
            name="category"
            placeholder="Category"
            items={items}
            numberOfColumns={3}
          />
          <AppFormFieldInput
            maxLength={255}
            multiline
            name="description"
            placeholder="Description"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
          />
          <AppFormSubmitButton title="Post" />
        </AppForm>
      </View>
    </AppSafeAreaView>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: colors.white},
  textInput: {flex: 1},
});
