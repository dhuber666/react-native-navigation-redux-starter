import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamsList} from './models/RootStackParamsList';

import HomeScreen from '../screens/Home/Home';
import DetailsScreen from '../screens/Details/Details';

const Stack = createStackNavigator<RootStackParamsList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Hello'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};
