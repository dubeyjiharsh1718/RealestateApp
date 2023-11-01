import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import PropertyListScreen from './screen/PropertyListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OTPScreen from './screen/EnterOtp';
import Profile from './screen/Profile';
import Home from './screen/Home';
import CreateNewPassword from './screen/CreateNewPassword';
import VerifyWith from './screen/VerifyWith';
import PropertyDetailsScreen from './screen/ProppertyDetailsScreen';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(splashTimer);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="PropertyList" component={PropertyListScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
          <Stack.Screen name="VerifyWith" component={VerifyWith} />
          {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
          <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
