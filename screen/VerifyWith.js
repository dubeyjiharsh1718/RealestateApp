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
            source={require('../assets/images/login.png')}
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
      <View style={styles.radioButtonItem}>
        <Text>Email : </Text>
        <RadioButton.Item label="" value="Email" />
      </View>
      <View style={styles.radioButtonItem}>
        <Text>Phone Number: </Text>
        <RadioButton.Item label="" value="Phone Number" />
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
        centerContainer: {
          alignItems: "center",
          marginTop : 30,
          borderTopLeftRadius: 50, // Add borderTopLeftRadius
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
            // flexDirection: 'row',
            // alignItems: 'center',
            // marginVertical: Spacing / 4,
          },
          radioButtonItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: Spacing / 4,
          },
      });