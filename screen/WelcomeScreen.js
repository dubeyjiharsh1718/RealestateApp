import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import Colors from "../constants/Colors";

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#15beae',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 160,
    borderRadius : 30,
  },
  signUpButton: {
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 7,
    borderRadius: 20,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  haveAccountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logInButton: {
    fontWeight: 'bold',
    color: 'blue',
  },
};

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around', margin: 4 }}>
        <Text style={styles.title}>Let's Get Started!</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../assets/images/house.jpg')}
            style={styles.image}
          />
        </View>
        <View style={{ marginTop: 4 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.haveAccountContainer}>
            <Text style={styles.haveAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logInButton}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
