import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/Navigator/RootNavigator';

function RootApp() {
  return <RootNavigator />;
}

function App() {
  return <RootApp />;
}

export default App;
