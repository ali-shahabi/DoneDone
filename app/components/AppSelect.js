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
import colors from '../config/colors';
import {AppSelectOption, AppIcon, AppText} from '.';

const AppSelect = ({icon, items, title}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerName, setPickerName] = useState(title);

  const handleSelectPicker = item => {
    setModalVisible(false);
    setPickerName(item.label);
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
          <AppText style={styles.text}>{pickerName}</AppText>
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
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <AppSelectOption
                label={item.label}
                onPress={() => handleSelectPicker(item)}
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
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {flex: 1, fontSize: 17},
});
