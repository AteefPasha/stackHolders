import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import InputText from '../../Components/InputText';
import Button from '../../Components/CustomButton';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -90 : 200}
      style={
        Platform.OS === 'ios' ? Style.containerIOS : Style.containerAndroid
      }>
      <View style={Style.MainContiner}>
        <View style={Style.Header}>
          <Image
            source={require('../../../assets/Svgs/Login2.gif')}
            style={Style.Image}
          />
          <View style={Style.TextContainer}>
            <Text style={Style.TextStyle}>Hello There!</Text>
            <Text style={Style.TextStyleTwo}>
              Welcome Back You've been missed!
            </Text>
          </View>
        </View>

        <View style={Style.Body}>
          <View style={Style.inputContainer}>
            <InputText
              label={'Email'}
              error={false}
              errorMessage={'Enter Valid Mail'}
              placeholder={'Enter Email Id'}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <InputText
              label={'Password'}
              error={false}
              errorMessage={'Enter Valid Password'}
              placeholder={'Enter Password'}
              onChangeText={setPassword}
              value={password}
              type="password"
            />
          </View>
          <View style={Style.ButtonContainer}>
            <CustomButton
              buttonColor="#6729ff"
              title="Login"
              onPress={() => {
                navigation.navigate('Home');
              }}
              buttonStyle={{width: 250, alignSelf: 'center'}}
              textStyle={{fontSize: 20}}
            />
          </View>
        </View>
        <View style={Style.Footer}></View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerIOS: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAndroid: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  MainContiner: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  Header: {
    flex: 5,
    width: '100%',
  },
  Body: {
    width: '100%',
    flex: 5.3,
  },

  // Footer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Image: {
    width: 290,
    height: 290,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  TextStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  TextStyleTwo: {
    fontSize: 20,
    color: 'white',
    top: 5,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#68b130',
    height: moderateScale(42),
    borderRadius: moderateScale(9),
    marginTop: moderateScale(20),
  },
  TextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 25,
  },
  ImageStyle: {
    height: '80%',
    width: '100%',
    maxWidth: '100%',
  },
  inputContainer: {},
  ButtonContainer: {
    top: moderateScale(40),
  },
});
