import React, { useEffect } from 'react';
import { StyleSheet,} from 'react-native';
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
import HomeLandingpage from './screen/HomeLandingpage';
import { NativeBaseProvider } from 'native-base';
import ImageFullScreenScreen from './screen/ImageFullScreenScreen';
import PlacesScreen from './screen/PlacesScreen';
import OwnerLanddpage from './screen/Ownerpage/OwnerLandpage';
import Alltenents from './screen/Ownerpage/Alltenents';


const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(splashTimer);
  }, []); 

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
          <Stack.Screen name="HomeScreen" component={HomeLandingpage} />
           <Stack.Screen name="ImageFullScreen" component={ImageFullScreenScreen} /> 
           <Stack.Screen name="PlacesScreen" component={PlacesScreen} /> 
           <Stack.Screen name="OwnerLandpage" component={OwnerLanddpage} />
           <Stack.Screen name="Alltenents" component={Alltenents} />
          <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
