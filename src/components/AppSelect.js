import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../theme/colors';
import AppIcon from './AppIcon';
import {AppSelectOption, AppText} from '.';
import firstLetterToUpperCase from '../utils/firstLetterToUpperCase';

const AppSelect = ({
  icon,
  items,
  title,
  selectedItem,
  onSelectItem,
  numberOfColumns,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

  const handleSelectOption = item => {
    setModalVisible(false);
    setSelectedOption(item.label);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <AppIcon
              name={icon}
              backgroundColor={colors.transparent}
              iconColor={colors.grey_1}
              size={40}
            />
          )}
          <AppText style={selectedOption ? styles.textBlack : styles.textGrey}>
            {selectedOption ? firstLetterToUpperCase(selectedOption) : title}
          </AppText>
          <AppIcon
            name="chevron-down"
            backgroundColor={colors.transparent}
            iconColor={colors.grey_1}
            size={40}
          />
        </View>
      </TouchableWithoutFeedback>
      <SafeAreaView>
        <Modal visible={modalVisible} animationType="slide">
          <Button
            color={colors.danger}
            title="close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            style={styles.flatList}
            data={items}
            key={'_'}
            keyExtractor={item => '_' + item.id.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <AppSelectOption
                item={item}
                onPress={() => handleSelectOption(item)}
              />
            )}
          />
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default AppSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_2,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 1,
    alignItems: 'center',
  },
  flatList: {paddingVertical: 10},
  textBlack: {flex: 1, fontSize: 18, color: colors.black_1, paddingLeft: 5},
  textGrey: {flex: 1, fontSize: 18, color: colors.grey_3, paddingLeft: 5},
});
