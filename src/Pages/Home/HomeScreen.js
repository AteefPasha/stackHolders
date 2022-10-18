import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../Components/CustomHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomHeader title="Home" />
      </View>
      <View style={styles.body} />
      <View style={styles.footer} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {flex: 0.7},
  body: {flex: 7},
  footer: {flex: 1},
});
