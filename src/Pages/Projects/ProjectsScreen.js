import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddProjects from './AddProjects';
import AllProjects from './AllProjects';

const ProjectsScreen = () => {
  return (
    <View>
      <AddProjects />
      <AllProjects />
    </View>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({});
