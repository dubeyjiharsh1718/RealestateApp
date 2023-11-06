import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  
  
  export default function LoginScreen() {
    const navigation = useNavigation();
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    
    const handleplacescreenPress = () => {
    navigation.navigate('OwnerHome');
      };

  const handleCreateAccountPress  = () => {
    navigation.navigate('SignupScreen');
  };
  const handleForgotpassPress  = () => {
    navigation.navigate('VerifyWith');
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
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
            placeholder="Email or Phone Number"
            placeholderTextColor={Colors.darkText}
            style={[
              styles.input,
              focusedEmail && styles.focusedInput,
            ]}
          />

          <TextInput
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            placeholder="Password"
            placeholderTextColor={Colors.darkText}
            style={[
              styles.input,
              focusedPassword && styles.focusedInput,
            ]}
            secureTextEntry={true}
          />
        </View>
       
        <TouchableOpacity style={styles.createAccount}   onPress={handleForgotpassPress}>
          <Text style={styles.ForgotpassText}>Forgot your password ?</Text>
        </TouchableOpacity>
        <View style={styles.centerContain}>
          <TouchableOpacity style={styles.signInButton} onPress={handleplacescreenPress} >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.donthaveaccount}   onPress={handleCreateAccountPress}>
          <Text style={styles.createAccountText}>don't have an account ?</Text>
        </TouchableOpacity>
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
  };
  
    // Define your styles in a separate object
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
        height: 50,
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
        centerContain : {
          alignItems: "center",
          marginTop : 10,
          borderTopLeftRadius: 50, // Add borderTopLeftRadius
          borderTopRightRadius: 50,
          // marginTop : 30,
        },
        centerContainer: {
          alignItems: "center",
          marginTop : 10,
          borderTopLeftRadius: 50, // Add borderTopLeftRadius
          borderTopRightRadius: 50,
          marginTop : 30,
        },
        centermainContainer : {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor : "white",
            height : "100%",
            width : "100%",
        },
        imageContainer: {
            flexDirection: "row",
            justifyContent: "center",
            height: 230,
          },
          image: {
            marginTop : 20,
            width: 180,
            height: 180,
            borderRadius : 50,
          },
        title: {
          fontSize: FontSize.xLarge,
          color: Colors.primary,
          fontFamily: Font["poppins-bold"],
          marginVertical: Spacing * 2,
        },
        subTitle: {
          fontFamily: Font["poppins-semiBold"],
          fontSize: FontSize.large,
          maxWidth: "60%",
          textAlign: "center",
        },
        forgotPassword: {
          fontFamily: Font["poppins-semiBold"],
          fontSize: FontSize.small,
          color: Colors.primary,
          marginRight: 10,
          marginTop: 10,
          marginBottom : 10,
        },
        signInButton: {
          width: 350,
          padding: Spacing,
          backgroundColor: "#15beae",
          borderRadius: Spacing,
          shadowColor: Colors.primary,
          shadowOffset: {
            width: 0,
            height: Spacing / 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
        },
        signInText: {
          fontFamily: Font["poppins-bold"],
          color: "white",
          textAlign: "center",
          fontSize: FontSize.large,
        },
        createAccount: {
          padding: Spacing,
          marginVertical: Spacing / 4,
        },
        donthaveaccount:{
          padding: Spacing,
          marginVertical: Spacing / 4,
        },
        createAccountText: {
          fontFamily: Font["poppins-semiBold"],
          color: Colors.text,
          textAlign: "center",
          fontSize: FontSize.small,
          color : 'blue',
          marginRight: 20,
        },
        ForgotpassText:{
          fontFamily: Font["poppins-semiBold"],
          color: Colors.text,
          textAlign: "right",
          fontSize: FontSize.small,
          color : 'blue',
          marginRight: 20,
        },
        continueWith: {
          fontFamily: Font["poppins-semiBold"],
          color: Colors.primary,
          textAlign: "center",
          fontSize: FontSize.small,
        },
        socialButtonsContainer: {
          marginTop: Spacing,
          flexDirection: "row",
          justifyContent: "center",
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
            flexDirection: "row",
            justifyContent: "center",
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
      });