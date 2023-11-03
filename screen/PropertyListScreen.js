import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, PanResponder,
  Animated, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5"
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../assets/const/colors'
import { PinchGestureHandler, State } from 'react-native-gesture-handler';


const { width } = Dimensions.get("screen");
const propertyData = [
  { id: '1', name: 'Simran Aim', price: '$200,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503' , image: require('../assets/images/house.jpg'),
  allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
   { id: '2', name: 'Shivam Apt', price: '$300,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../assets/images/real-estate-6688945_1280.jpg'),
   allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
   { id: '3', name: 'Harsh APT', price: '$400,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../assets/images/house.jpg'),
   allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
 
];
function PropertyListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [scale, setScale] = useState(new Animated.Value(1));

  const onPinchEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: false }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };


  return (
    <View style={styles.container}>
    {/* <Text style={styles.header}>Property Listings</Text> */}
    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginBottom: 10,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={"#15beae"} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
                    <View style={styles.sortbtn}>
                        <Icon name='tune' color={COLORS.white} size={25} />
                    </View>

                </View>
      <View style={styles.propertidata}>
    <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={styles.itemContainer}
        >
          <TouchableOpacity style={styles.imageContainer}
           onPress={() => navigation.navigate('PropertyDetails', { property: item })}>
            <Image source={item.image} style={styles.propertyImage} />
            
          </TouchableOpacity>
         
        
          {/* <Text style={styles.propertyName}>{item.name}</Text> */}
          <View style={styles.locationContainer}>
              <FontAwesome5 name="map-marker-alt" style={styles.locationIcon} />
              <Text style={styles.propertyLocation}>{item.location}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.propertyPrice}>{item.price}</Text>
              <TouchableOpacity>
              <FontAwesome5 name="heart" style={styles.savetocart} /></TouchableOpacity>
            </View>
        </View>
      )}
      showsVerticalScrollIndicator={false} 
    />
    </View>
  </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  propertidata : {
marginTop : 0,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    height: 320,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
  },
  imageContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  propertyImage: {
    width: 350, 
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    alignItems: 'center',
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 20,
    color: '#0c7167',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  savetocart: {
    fontSize: 20,
    color: 'blue', 
  },
  propertyValue: {
    flex: 3,
    fontSize: 16, 
  },
  locationContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 5,
    color: 'blue',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#15beae',
    padding: 1,
    marginTop: 5,
    height : 50,
     marginBottom: 10,
    width: 330,
    borderRadius: 20,
    alignSelf: 'center',
 
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 5,
    paddingLeft: 5,
    color: '#15beae', 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
},
sortbtn: {
    backgroundColor: "#15beae",
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
},

});


export default PropertyListScreen;
