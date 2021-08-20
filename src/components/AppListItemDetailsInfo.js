import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import colors from '../theme/colors';
import {AppText} from '.';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppListItemDetailsInfo = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  renderLeftActions,
  IconComponent,
}) => {
  return (
    // <Swipeable
    // renderRightActions={renderRightActions}
    // renderLeftActions={renderLeftActions}>
    // <TouchableHighlight underlayColor={colors.grey_2} onPress={onPress}>
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
    </View>
    //   </TouchableHighlight>
    // </Swipeable>
  );
};

export default AppListItemDetailsInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {flex: 1, marginLeft: 10, justifyContent: 'center'},
  image: {width: 70, height: 70, borderRadius: 35, marginRight: 10},
  subTitle: {color: colors.grey_1, fontSize: 14, minHeight: 30},
  title: {fontWeight: '500', fontSize: 18, minHeight: 10},
});
