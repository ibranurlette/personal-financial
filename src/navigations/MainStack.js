import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'src/ui/screens/Main/HomeScreen';

import routeName from './routeName';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.Home}>
      <Stack.Screen
        name={routeName.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
