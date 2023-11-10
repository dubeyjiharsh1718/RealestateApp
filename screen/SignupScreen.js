import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { RadioButton,  } from 'react-native-paper';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [focusedName, setFocusedName] = useState(false);
  const [focusedMobile, setFocusedMobile] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Owner');

const handleSignUp = async () => {
  try {
    // Validate name
    if (!userData.requestData.fullName.trim()) {
      console.error('Name is required');
      return;
    }

    // Validate mobile number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(userData.requestData.mobileNumber)) {
      console.error('Invalid mobile number');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.requestData.emailId)) {
      console.error('Invalid email address');
      return;
    }

    // Validate password
    if (userData.requestData.password.length < 6) {
      console.error('Password must be at least 6 characters long');
      return;
    }

    // Rest of your signup logic
    const response = await axios.post('https://hraprojectwa.azurewebsites.net/users/register', userData, {
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    });

    if (response.status === 200) {
      console.log('Registration successful');
      console.log('response', response);
      console.log('userdata', userData);
    } else {
      console.error('Registration failed');
      console.log('response', response);
    }
  } catch (error) {
    console.error('Error during registration:', error.response);
  }
};


  const handleAlreadyAccountPress = () => {
    navigation.navigate('Login');
  };

  const handleOtpscreenPress = () => {
    handleSignUp();
    navigation.navigate('OTPScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/house.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.centermainContainer}>
        <View style={styles.centerContainer}>
          <TextInput
            name="fullname"
            onFocus={() => setFocusedName(true)}
            onBlur={() => setFocusedName(false)}
            placeholder="Name"
            placeholderTextColor="darkText"
            style={[styles.input, focusedName && styles.focusedInput]}
          />

          <TextInput
            name="mobile"
            onFocus={() => setFocusedMobile(true)}
            onBlur={() => setFocusedMobile(false)}
            placeholder="Mobile Number"
            placeholderTextColor="darkText"
            style={[styles.input, focusedMobile && styles.focusedInput]}
          />

          <TextInput
            name="email"
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
            placeholder="Email"
            placeholderTextColor="darkText"
            style={[styles.input, focusedEmail && styles.focusedInput]}
          />

          <TextInput
            name="pasword"
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            placeholder="Password"
            placeholderTextColor="darkText"
            style={[
              styles.input,
              focusedPassword && styles.focusedInput,
            ]}
            secureTextEntry={true}
          />
          <View>
            <RadioButton.Group
              onValueChange={(value) => setSelectedOption(value)}
              value={selectedOption}
            >
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Owner" value="Owner" />
                <RadioButton.Item label="Tenant" value="Tenant" />
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <TouchableOpacity
          style={styles.createAccount}
          onPress={handleAlreadyAccountPress}
        >
          <Text style={styles.createAccountText}>
            Already have an account ?
          </Text>
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <TouchableOpacity style={styles.signInButton} onPress={handleOtpscreenPress}>
            <Text style={styles.signInText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.continueWith}>Or continue with</Text>
          <View style={styles.socialButtonContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/google.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/apple.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/facebook.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


    const styles = StyleSheet.create({
      input: {
        fontFamily: Font['poppins-regular'],
        fontSize: FontSize.small,
        paddingVertical: Spacing,
        paddingHorizontal: Spacing * 2,
        borderRadius: Spacing,
        marginVertical: Spacing / 2,
        borderWidth: 1,
        width: 350,
        height: 40,
      },
      focusedInput: {
        borderWidth: 3,
        borderColor: Colors.primary,
        shadowOffset: { width: 4, height: Spacing },
        shadowColor: Colors.primary,
        shadowOpacity: 0.2,
        shadowRadius: Spacing,
      },
      container: {
        flex: 1,
        backgroundColor: '#15beae',
      },
      centerContainer: {
        alignItems: 'center',
        marginTop: 8,
      },
      centermainContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      },
      imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 220,
      },
      image: {
        marginTop : 20,
        width: 180,
        height: 180,
        borderRadius : 50,
      },
      signInButton: {
        width: 350,
        padding: Spacing / 1,
        backgroundColor: '#15beae',
        borderRadius: Spacing / 1,
        shadowColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: Spacing / 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing / 2,
      },
      signInText: {
        fontFamily: Font['poppins-bold'],
        color: 'white',
        textAlign: 'center',
        fontSize: FontSize.large,
      },
      createAccount: {
        paddingTop: 10,
      },
      createAccountText: {
        fontFamily: Font['poppins-semiBold'],
        color: Colors.text,
        textAlign: 'right',
        paddingRight : 30,
        color : "blue",
        fontSize: FontSize.small,
      },
      continueWith: {
        fontFamily: Font['poppins-semiBold'],
        color: Colors.primary,
        textAlign: 'center',
        fontSize: FontSize.small,
        paddingBottom: 5,
      },
      socialButton: {
        padding: Spacing,
        backgroundColor: Colors.gray,
        borderRadius: Spacing / 2,
        marginHorizontal: Spacing,
      },
      socialIcon: {
        color: Colors.text,
        fontSize: Spacing * 2,
      },
      socialButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: Spacing,
      },
      socialButton: {
        padding: Spacing / 2,
        backgroundColor: Colors.gray,
        borderRadius: Spacing,
        marginHorizontal: Spacing / 2,
      },
      socialIcon: {
        width: 40,
        height: 40,
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Spacing / 4,
      },
    });
