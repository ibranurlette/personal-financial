import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {uiStyle} from 'src/ui/constants';
import routeName from './routeName';

import HomeScreen from 'src/ui/screens/Main/HomeScreen';
import NotePengeluaranScreen from 'src/ui/screens/Main/Pengeluaran/NotePengeluaranScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.NotePengeluaran}>
      <Stack.Screen
        name={routeName.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routeName.NotePengeluaran}
        component={NotePengeluaranScreen}
        options={{
          ...uiStyle.screenOptions,
          title: 'Catat Pengeluaran',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
