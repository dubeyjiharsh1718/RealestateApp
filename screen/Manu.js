import React from 'react';
import Profile from './Profile';
import PropertyListScreen from './PropertyListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Manu = () => {
  return (
    <Drawer.Navigator
      initialRouteName="PropertyList"
      drawerPosition="left"
    >
      <Drawer.Screen
        name="PropertyList"
        component={PropertyListScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Manu;
