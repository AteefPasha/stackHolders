import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AppTheme} from '../Theme';

const Loader = ({color, size}) => {
  return (
    <View>
      <ActivityIndicator color={'#fff'} size={size} />
    </View>
  );
};

export default Loader;
