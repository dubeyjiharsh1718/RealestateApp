import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Surface } from 'react-native-paper';
import COLORS from '../../assets/const/colors';
import RNPickerSelect from 'react-native-picker-select';

const { width } = Dimensions.get('screen');

function Createnewproperty({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const [currentSection, setCurrentSection] = useState('Overview');
  const sections = ['Overview', 'Location', 'Amenities', 'Photo'];

  const [value, setValue] = useState(null);

  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <ScrollView ew style={styles.container}>
      <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name="arrow-left"
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{}}>
          <Text style={styles.headerText}>Create</Text>
        </View>
      </Surface>
      <ScrollView
        horizontal
        style={styles.optionaddproperty}
        showsHorizontalScrollIndicator={false}
      >
        {sections.map((section, index) => (
          <TouchableOpacity key={index} onPress={() => handleSectionClick(section)}>
            <View
              style={[
                styles.optionCardtopsearch,
                currentSection === section && styles.activeSection,
              ]}
            >
              <Text style={{ marginTop: 6, fontSize: 18, color: "white" }}>
                {section}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {currentSection === 'Overview' && (
        <View>
          <View>
            {currentSection === 'Overview' && (
              <View>
                <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Property Name</Text>
                <TextInput
                  style={styles.otpInput}
                  keyboardType="default"
                  placeholder="Property name"
                  textAlignVertical="top"
                />
                <Text style={{ fontSize: 18, color: 'black',marginTop: 5 }}>Property Type</Text>

                <RNPickerSelect
                  onValueChange={(value) => setValue(value)}
                  items={[
                    { label: 'Select Property Type', value: '' },
                    { label: 'Apartment', value: 'apartment' },
                    { label: 'Villa', value: 'villa' },
                    { label: 'Independent Home', value: 'independent_home' },
                    // Add more property types as needed
                  ]}
                  style={pickerSelectStyles}
                />
              </View>
            )}
          </View>
          <View>
            <Text style={{ fontSize: 18, color: 'black',marginBottom:5, }}>Description</Text>

            <TextInput
              style={{ ...styles.otpInput, height: 90 }}
              keyboardType="default"
              placeholder="Property name"
              textAlignVertical="top"
            />
          </View>
          <View style={{ flexDirection: 'row', marginRight: 5,marginTop: 10,marginBottom:50, }}>
  <View style={{ flex: 1}}>
    <Text style={{ fontSize: 18, color: 'black', textAlign:'center' }}>Bedrooms</Text>
    <RNPickerSelect
      onValueChange={(value) => setValue(value)}
      items={[
        { label: 'Select Property Type', value: '' },
        { label: '1', value: 'apartment' },
        { label: '2', value: 'villa' },
        { label: '3', value: 'independent_home' },
      ]}
      style={pickerSelectStyles} // Style for the dropdown container
    />
  </View>
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 18, color: 'black',textAlign:'center' }}>Bathrooms</Text>
    <RNPickerSelect
      onValueChange={(value) => setValue(value)}
      items={[
        { label: 'Select Property Type', value: '' },
        { label: '1', value: 'apartment' },
        { label: '2', value: 'villa' },
        { label: '3', value: 'independent_home' },
      ]}
      style={pickerSelectStyles} // Style for the dropdown container
    />
  </View>
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 18, color: 'black',textAlign:'center' }}>Kitchen</Text>
    <RNPickerSelect
      onValueChange={(value) => setValue(value)}
      items={[
        { label: 'Select Property Type', value: '' },
        { label: '1', value: 'apartment' },
        { label: '2', value: 'villa' },
        { label: '3', value: 'independent_home' },
      ]}
      style={pickerSelectStyles} // Style for the dropdown container
    />
  </View>
</View>

        </View>
      )}
      {currentSection === 'Location' && <View>{/* Add content for the Location section here */}</View>}
      {currentSection === 'Amenities' && <View>{/* Add content for the Amenities section here */}</View>}
      {currentSection === 'Photo' && (
        <View>
        <View>
          <Text>Overview</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                   style={{ ...styles.item, backgroundColor:'gray' }}
                  >
                  <Image source={require('../../assets/images/Addimage.png')}
                   style={{ ...styles.imageadd,}}
                  />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bedrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                  style={{ ...styles.item, backgroundColor:'gray' }}
                  >
                  <Image source={require('../../assets/images/Addimage.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bathrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
                  style={{ ...styles.item, backgroundColor:'gray' }}
                  >
                  <Image source={require('../../assets/images/Addimage.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View>
        <View>
          <Text>Bathrooms</Text>
           <View style={styles.container2}>
            
                <TouchableOpacity
               style={{ ...styles.item, backgroundColor:'gray' }}
                  >
                  <Image source={require('../../assets/images/Addimage.png')} style={styles.imageadd} />
                  </TouchableOpacity>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                   
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                 </View>
                <View
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                 </View>
              
            </View>
        </View></View>
      )}
      <View style={{ marginLeft: 20,marginBottom:50, }}>
        <Feather
          name="arrow-left"
          size={25}
          style={{ color: '#15273F' }}
          onPress={navigation.goBack}
        />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    padding: 16,
    backgroundColor: 'white',
  },
      container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
         margin: 10,
        justifyContent: 'center',
      },
      item: {
        width: '20%', 
        margin: 8,
        alignItems: 'center',
        elevation: 4,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 10,
        padding: 2,
      },
      image: {
        width: '100%',
        height: 50,
        marginBottom:5,
      },
      imageadd: {
        width: '100%',
        height: 50,
        marginBottom:5,
      },
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15273F',
    textAlign:'center',
    justifyContent:'center',
    paddingRight: 20,
  },
  optionCardtopsearch: {
    height: 40,
    width: 100,
    elevation: 5,
    backgroundColor: "#15beae",
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginRight: 15,
    marginBottom: 10,
    marginLeft: 5,
    paddingHorizontal: 10,
  },
  optionaddproperty: {
    marginTop: 10,
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 70,
    marginVertical: 5,
    marginRight: 10,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%', // Set the width to 100% to take the full width
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%', // Set the width to 100% to take the full width
  },
};


export default Createnewproperty;
