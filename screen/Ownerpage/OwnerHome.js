import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profileowner from './Profileowner';
import OwnerLanddpage from './OwnerLandpage';
import Icon from 'react-native-vector-icons/FontAwesome';

const profileowner = 'Profileowner'
const Ownerhomelandpage = "OwnerHome"
const Tab = createBottomTabNavigator();

const OwnerHome = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown : false}}
      tabBarOptions={{
        activeTintColor: '#15beae'  
      }}
    >
      <Tab.Screen
        name={Ownerhomelandpage}
        component={OwnerLanddpage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> 
          ),
        }}
      />
        <Tab.Screen
        name={profileowner}
        component={Profileowner}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bars" color={color} size={size} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OwnerHome;
