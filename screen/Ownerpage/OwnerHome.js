import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profile from './Profile';
import OwnerLanddpage from './OwnerLandpage';
import Icon from 'react-native-vector-icons/FontAwesome';

// const profile = 'Profile';
// const propertylist = "PropertyList";
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
        {/* <Tab.Screen
        name={propertylist}
        component={PropertyListScreen}
        options={{
          tabBarLabel: 'Property List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="building" color={color} size={size} /> 
          ),
        }}
      />
      <Tab.Screen
        name={profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default OwnerHome;
