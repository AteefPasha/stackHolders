import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddClients from './AddClients';
import AllClients from './AllClients';

const ClientsScreen = () => {
  return (
    <View>
      <AddClients />
      <AllClients />
    </View>
  );
};

export default ClientsScreen;

const styles = StyleSheet.create({});
