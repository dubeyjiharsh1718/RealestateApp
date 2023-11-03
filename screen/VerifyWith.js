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
  import { RadioButton,  } from 'react-native-paper';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  
  export default function VerifyWith() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Email');

  const handleCreatenewpass  = () => {
    navigation.navigate('CreateNewPassword');
  };
    return (
      <SafeAreaView style={styles.container}>
           <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/forgotmessage.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.centermainContainer}>
        <View style={styles.centerContainer}>
        <View>
  <RadioButton.Group
    onValueChange={(value) => setSelectedOption(value)}
    value={selectedOption}
  >
    <View style={styles.radioButtonContainer}>
      <View style={styles.VerifyWith}>
    <Text style={styles.VerifyWithtext}>How Whould You like to verify Identify?  </Text></View>
      <View style={styles.radioButtonItem}>
        <RadioButton.Item label="" value="Email" />
        <Text style={styles.phonetext}>Email  </Text>
        <FontAwesome5 name="envelope" style={styles.phoneicon} />
      </View>
      <View style={styles.radioButtonItem}>
        <RadioButton.Item label="" value="Phone Number" />
        <Text style={styles.phonetext}>Phone Number </Text>
        <FontAwesome5 name="phone" style={styles.phoneicon}  />
      </View>
    </View>
  </RadioButton.Group>
</View>

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
  
    const styles = StyleSheet.create({
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
        VerifyWith: {
          width: 300,
          height: 80, 
          elevation: 3,
          alignItems: 'center',
          justifyContent: 'center', 
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10, 
          marginBottom:10,
        },
        VerifyWithText: {
          textAlign: 'center', 
          fontSize: 16, 
        },
        subTitle: {
          fontFamily: Font["poppins-semiBold"],
          fontSize: FontSize.large,
          maxWidth: "60%",
          textAlign: "center",
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
        radioButtonContainer: {
          },
          radioButtonItem: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          phoneicon :{
            fontSize: 20,
            marginRight: 5,
            color: '#15beae',
          },
          phonetext:{
            color: 'black',
          },
          VerifyWithtext: {
            color: 'black',
          },
      });