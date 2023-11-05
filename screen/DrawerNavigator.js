import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeLandingpage from './HomeLandingpage';
import OwnerLanddpage from './OwnerLandpage';


const homelandingpage = 'HomeLandingpage';
const ownerLanddpage = 'OwnerLanddpage';
const Drawer = createDrawerNavigator();

const Drawernav = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ownerLanddpage} // Set the initial route
      drawerContentOptions={{
        activeTintColor: '#15beae', // Set the active tint color for the drawer items
      }}
    >
      <Drawer.Screen
        name={homelandingpage}
        component={HomeLandingpage}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
         <Drawer.Screen
        name={ownerLanddpage}
        component={OwnerLanddpage}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    
    </Drawer.Navigator>
  );
};

export default Drawernav;
