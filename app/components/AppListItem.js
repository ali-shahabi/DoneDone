import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import colors from '../config/colors';
import {AppText} from '.';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const AppListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  renderLeftActions,
  IconComponent,
}) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <TouchableHighlight underlayColor={colors.grey_2} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 15, backgroundColor: colors.white},
  detailsContainer: {marginLeft: 10, justifyContent: 'center'},
  image: {width: 70, height: 70, borderRadius: 35, marginRight: 10},
  subTitle: {color: colors.grey_1, fontSize: 16},
  title: {fontWeight: '500'},
});
