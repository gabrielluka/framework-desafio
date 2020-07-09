import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from './style';

export const CardShadow = (props) => {
  return <Card style={style.shadow}>{props.children}</Card>;
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 1,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
