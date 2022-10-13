import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../Constants';
import {AppTheme} from '../Theme';
import LoginScreen from '../Pages/Login/LoginScreen';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppStack from './AppStack';

const RootNavigator = () => {
  const {colors} = AppTheme;
  const {Navigator, Screen} = createNativeStackNavigator();
  const navigationDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.MainAppColor,
    },
  };
  const initalRouteName = screens.Login;
  return (
    <SafeAreaView style={styles.Container}>
      <NavigationContainer theme={navigationDefaultTheme}>
        <Navigator
          initialRouteName={initalRouteName}
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name={screens.Login} component={LoginScreen} />
          <Screen name={screens.Home} component={AppStack} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: AppTheme.colors.MainAppColor,
  },
});
