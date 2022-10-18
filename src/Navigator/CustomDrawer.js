/* eslint-disable react-native/no-inline-styles */
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AppTheme} from '../Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = props => {
  return (
    <View style={styles.MainConatiner}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: AppTheme.colors.primary,
        }}>
        <ImageBackground
          source={require('../../assets/Svgs/draw.png')}
          style={{padding: 20, height: 150}}>
          <View>
            <Image
              source={require('../../assets/Svgs/MEE.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
              }}
            />
            <Text style={styles.ProfileText}>Sheikh Ateef</Text>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.Footer}>
        <View style={styles.Logout}>
          <Icon name="logout" size={24} color="black" />
          <Text style={styles.LogoutText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
  },
  ProfileText: {
    top: 10,
    right: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  Logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 30,
    marginLeft: 10,
  },
  LogoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
