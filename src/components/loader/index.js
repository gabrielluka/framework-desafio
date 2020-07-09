import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Loader = () => {
  const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  };
  return <ActivityIndicator size="large" style={style} />;
};
