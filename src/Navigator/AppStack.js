import * as React from 'react';
import Image from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Pages/Home/HomeScreen';
import ClientsScreen from '../Pages/Clients/ClientsScreen';
import ProjectsScreen from '../Pages/Projects/ProjectsScreen';
import TaskScreen from '../Pages/Tasks/TaskScreen';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppTheme} from '../Theme';
import {color} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export default function AppStack() {
  Icon.loadFont();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: AppTheme.colors.primary,
        drawerActiveTintColor: AppTheme.colors.white,
        drawerInactiveTintColor: AppTheme.colors.black,
        drawerLabelStyle: {
          fontSize: 18,
          marginleft: -25,
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Clients"
        options={{
          drawerIcon: () => (
            <Icon name="people-outline" size={24} color={color} />
          ),
        }}
        component={ClientsScreen}
      />
      <Drawer.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          drawerIcon: () => (
            <Icon name="folder-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          drawerIcon: () => (
            <Icon name="list-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
