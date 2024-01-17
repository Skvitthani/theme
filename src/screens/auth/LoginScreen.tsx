import {
  hp,
  wp,
  Colors,
  fontSize,
  storeData,
  ImageConst,
  StringConst,
  bottomButton,
  imageColorFun,
  buttonColorFun,
  footerButtonColorFun,
} from '../../utils/Index';
import React, {useContext, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import InputText from '../../components/InputText';
import ButtonComp from '../../components/ButtonComp';
import {ThemeCon} from '../../components/ColorContex';
import ThemeChangeModal from '../../components/ThemeChangeModal';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  const {colors} = useTheme();

  const {setCurrentTheme}: any = useContext(ThemeCon);
  const [isVisible, setIsVisible] = useState(false);

  const onChangeTheme = () => {
    setIsVisible(true);
  };

  const imageColor = imageColorFun();
  const buttonColor = buttonColorFun();
  const footer = footerButtonColorFun();

  const renderItem = ({item}: {item: {image: any; key: number}}) => {
    return (
      <View style={[styles.bottomListView, {backgroundColor: footer}]}>
        <Image source={item?.image} style={styles.bottomImageView} />
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={{marginTop: hp(4)}} />
      <Text style={styles.greenAppleText}>{StringConst.green_apple}</Text>
      <Text style={styles.mobileBankingText}>
        {StringConst.mobile_banking_app}
      </Text>
      <View style={{marginTop: hp(4.5)}} />
      <Image
        source={ImageConst.apple}
        style={styles.appleImage}
        tintColor={imageColor}
      />
      <View style={{marginTop: hp(4)}} />
      <Text style={styles.welcomText}>{StringConst.welcome}</Text>
      <View style={styles.inputContainer}>
        <InputText placeholder={StringConst.username} value="Sanket" />
        <InputText placeholder={StringConst.email} value="sanket@gmail.com" />
        <InputText
          secureTextEntry
          value="Sanket@123"
          placeholder={StringConst.password}
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          customButtonStyle={{backgroundColor: buttonColor}}
          title={StringConst.change_theme}
          onPress={onChangeTheme}
        />
      </View>

      <FlatList
        horizontal
        data={bottomButton}
        renderItem={renderItem}
        style={{flexGrow: 0, marginTop: hp(4)}}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.fotterView}>
        <Text style={styles.fotterText}>
          {StringConst.already_have_an_account}
        </Text>
        <Text style={styles.fotterText}>{StringConst.forgot_password}</Text>
      </View>
      <ThemeChangeModal
        onColorSelect={color => {
          storeData(color?.key);
          setCurrentTheme(color);
          setIsVisible(false);
        }}
        modalVisible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenAppleText: {
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSize(20),
  },
  mobileBankingText: {
    fontWeight: '300',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSize(10),
  },
  appleImage: {
    width: wp(41),
    height: hp(14),
    alignSelf: 'center',
  },
  welcomText: {
    lineHeight: 60,
    maxWidth: wp(50),
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.white,
    alignSelf: 'center',
    fontSize: fontSize(48),
  },
  inputContainer: {
    marginHorizontal: wp(19),
  },
  bottomListView: {
    borderRadius: 32,
    paddingVertical: hp(1),
    paddingHorizontal: wp(9),
  },
  listContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  bottomImageView: {
    width: hp(2.5),
    height: hp(2.5),
  },
  fotterText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSize(10),
  },
  fotterView: {
    flex: 1,
    marginBottom: hp(1),
    justifyContent: 'flex-end',
  },
  buttonView: {
    marginTop: hp(6.4),
    marginHorizontal: wp(28),
  },
});
