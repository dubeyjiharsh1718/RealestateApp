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
  
  
  export default function CreateNewPassword() {
    const navigation = useNavigation();
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const handleCreatenewpass  = () => {
    navigation.navigate('Login');
  };
    return (
      <SafeAreaView style={styles.container}>
           <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/resetpassword.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.centermainContainer}>
        <View style={styles.centerContainer}>
        <View style={styles.VerifyWith}>
    <Text style={styles.VerifyWithText}>Reset Password</Text></View>
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

          <TextInput
            onFocus={() => setFocusedConfirmPassword(true)}
            onBlur={() => setFocusedConfirmPassword(false)}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.darkText}
            style={[
              styles.input,
              focusedConfirmPassword && styles.focusedInput,
            ]}
            secureTextEntry={true}
          />
        </View>
      
        <View style={styles.centerContainer}>
          <TouchableOpacity style={styles.signInButton} onPress={handleCreatenewpass}>
            <Text style={styles.signInText}>Submit</Text>
          </TouchableOpacity>
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
        VerifyWith: {
          width: 130,
          height: 80,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          alignItems: 'flex-start', 
        },
        VerifyWithText: {
          fontSize: 22,
          color: 'black',
          textAlign: 'left', 
        },
        centerContainer: {
          alignItems: "center",
          marginTop : 30,
          borderTopLeftRadius: 50, 
          borderTopRightRadius: 50,
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
          },
          image: {
            width: 200,
            height: 160,
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
          alignSelf: "flex-end",
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
        createAccountText: {
          fontFamily: Font["poppins-semiBold"],
          color: Colors.text,
          textAlign: "center",
          fontSize: FontSize.small,
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