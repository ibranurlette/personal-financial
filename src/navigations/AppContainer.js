import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UserStack from './UserStack';
// import MainStack from './MainStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <UserStack />
      {/* <MainStack /> */}
    </NavigationContainer>
  );
};

export default AppContainer;
