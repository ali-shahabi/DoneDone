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
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
  {
    id: 2,
    label: 'digital',
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
  {
    id: 3,
    label: 'furniture',
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
  {id: 4, label: 'cars', icon: 'email', iconBackgroundColor: colors.secondary},
  {id: 5, label: 'games', icon: 'email', iconBackgroundColor: colors.secondary},
  {
    id: 6,
    label: 'sports',
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
  {
    id: 7,
    label: 'movies',
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
  {id: 8, label: 'music', icon: 'email', iconBackgroundColor: colors.secondary},
  {id: 9, label: 'books', icon: 'email', iconBackgroundColor: colors.secondary},
  {
    id: 10,
    label: 'other',
    icon: 'email',
    iconBackgroundColor: colors.secondary,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().min(1).max(10000).required().label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const ListingEditScreen = () => {
  const onSubmit = values => {
    console.log(values);
    Keyboard.dismiss();
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
  container: {padding: 20},
  textInput: {flex: 1},
});
