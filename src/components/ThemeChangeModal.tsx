import {
  View,
  Text,
  Modal,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ButtonComp from './ButtonComp';
import {colorItem} from './Interface';
import {ColorData, Colors} from '../utils/Index';

const {width} = Dimensions.get('window');

interface ThemeModal {
  modalVisible?: boolean;
  onRequestClose?: () => void;
  onColorSelect: (data: colorItem) => void;
}

const ThemeChangeModal = ({
  modalVisible,
  onRequestClose,
  onColorSelect,
}: ThemeModal) => {
  const renderItem = ({item}: {item: colorItem}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onColorSelect(item);
        }}
        style={[
          styles.colorListView,
          {
            backgroundColor: item?.color,
          },
        ]}>
        <Text style={styles.title}>{item?.color}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ButtonComp title="Close" onPress={onRequestClose} />
          <View>
            <FlatList data={ColorData} renderItem={renderItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ThemeChangeModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    padding: 35,
    borderRadius: 20,
    width: width - 20,
    backgroundColor: 'white',

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  title: {
    color: Colors.white,
  },
  colorListView: {
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
