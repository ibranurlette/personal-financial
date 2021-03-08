import React from 'react';
import {StatusBar} from 'react-native';
import {uiColor} from '../constants';

const MyStatusBar = ({backgroundColor}) => {
  return (
    <StatusBar
      backgroundColor={backgroundColor ? backgroundColor : uiColor.background}
      barStyle="dark-content"
    />
  );
};

export default MyStatusBar;
