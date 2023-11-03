import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import PropertyListScreen from './PropertyListScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HomeLandingpage from './HomeLandingpage';

const profile = 'Profile';
const propertylist = "PropertyList";
const homelandingpage = "HomeLandingpage"
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown : false}}
      tabBarOptions={{
        activeTintColor: '#15beae'  
      }}
    >
      <Tab.Screen
        name={homelandingpage}
        component={HomeLandingpage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> 
          ),
        }}
      />
        <Tab.Screen
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
      />
    </Tab.Navigator>
  );
};

export default Home;
