import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserScreen from 'src/ui/screens/User/UserScreen';

import routeName from './routeName';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.User}>
      <Stack.Screen
        name={routeName.User}
        component={UserScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
