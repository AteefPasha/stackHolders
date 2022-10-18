import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppTheme} from '../Theme';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = props => {
  const navigation = props.navigation;
  return (
    <View style={styles.Container}>
      <View style={styles.body}>
        <View style={styles.Icon}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Icon
              name="menu-outline"
              size={44}
              style={{fontWeight: '200'}}
              color="white"
            />
          </Pressable>
        </View>

        <View style={styles.bodyContaainer}>
          <Text style={styles.TextContainer}>{props.title}</Text>
          <Image
            source={require('../../assets/Svgs/notification.png')}
            style={{height: 30, width: 30, tintColor: 'white', top: 3}}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
  },
  bodyContaainer: {
    width: '80%',

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Icon: {
    top: 3,
    width: '10%',
    left: 10,
  },
  TextContainer: {
    color: 'white',
    fontSize: 20,
    fontweight: '800',
  },

  body: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },

  countContainer: {
    backgroundColor: AppTheme.colors.primary,
    width: 10,
    height: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
