import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddTask from './AddTask';
import AllTasks from './AllTasks';

const TaskScreen = () => {
  return (
    <View>
      <AddTask />
      <AllTasks />
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
