import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import colors from '../theme/colors';
import {AppText} from '.';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppListItem = ({
  image,
  title,
  subTitle,
  onPress,
  IconComponent,
  chevronIcon,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.grey_2} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          {subTitle && (
            <AppText numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </AppText>
          )}
        </View>
        {chevronIcon && (
          <MaterialCommunityIcons
            color={colors.grey_1}
            name="chevron-right"
            size={25}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: {flex: 1, marginLeft: 10, justifyContent: 'center'},
  image: {width: 70, height: 70, borderRadius: 35, marginRight: 10},
  subTitle: {color: colors.grey_1, fontSize: 14, minHeight: 30},
  title: {fontWeight: '500', fontSize: 18, minHeight: 10},
});
