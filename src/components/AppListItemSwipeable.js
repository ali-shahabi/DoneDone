import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../theme/colors';
import {AppText} from '.';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppListItemSwipeable = ({
  image,
  title,
  subTitle,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
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
        <MaterialCommunityIcons
          color={colors.grey_1}
          name="chevron-right"
          size={25}
        />
      </View>
    </Swipeable>
  );
};

export default AppListItemSwipeable;

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
