import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Tab.Screen name="ContactStackNavigator" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
