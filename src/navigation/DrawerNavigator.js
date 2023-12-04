import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { ContactStackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="ContactStackNavigator" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
