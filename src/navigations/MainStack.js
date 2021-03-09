import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {uiStyle} from 'src/ui/constants';
import routeName from './routeName';

import HomeScreen from 'src/ui/screens/Main/HomeScreen';
import NotePengeluaranScreen from 'src/ui/screens/Main/Pengeluaran/NotePengeluaranScreen';
import HistoriPengeluaranScreen from 'src/ui/screens/Main/Pengeluaran/HistoriPengeluaranScreen';
import TotalPengeluaranScreen from 'src/ui/screens/Main/Pengeluaran/TotalPengeluaranScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.TotalPengeluaran}>
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
      <Stack.Screen
        name={routeName.HistoriPengeluaran}
        component={HistoriPengeluaranScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routeName.TotalPengeluaran}
        component={TotalPengeluaranScreen}
        options={{
          ...uiStyle.screenOptions,
          title: 'Total Pengeluaran',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
