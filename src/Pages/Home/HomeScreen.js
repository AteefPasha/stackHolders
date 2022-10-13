import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>HEllo</Text>
      <View style={styles.Header}></View>
      <View style={styles.Footer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    color: 'white',
  },
  Header: {
    flex: 1,

    width: '100%',
  },

  Footer: {
    flex: 1,

    width: '100%',
  },
});
