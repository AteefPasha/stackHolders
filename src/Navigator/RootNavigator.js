import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Pages/Home/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {screens} from '../Constants';
import {AppTheme} from '../Theme';

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
  const initalRouteName = screens.Home;
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationDefaultTheme}>
        <Navigator
          initialRouteName={initalRouteName}
          screenOptions={{
            headerMode: 'false',
          }}>
          <Screen name={screens.Home} component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
