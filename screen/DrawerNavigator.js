// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={Profile} />
      {/* Add more screens here if needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
