import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
    ScrollView,
    Pressable,
    TextInput,
    BackHandler,
    TouchableOpacity,
    Alert,
    Image,
    View,
    Text
} from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'
import Icon from 'react-native-vector-icons/MaterialIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useIsFocused } from '@react-navigation/native'
import COLORS from '../assets/const/colors'


const { width } = Dimensions.get("screen");

const PlacesScreen = ({ navigation }) => {
    var location = "Kalyan";
    var PersonName = "Harsh Dubey";

    const handleplacehome = () => {
        navigation.navigate('Home');
      };

    const isFocused = useIsFocused();

    function backActionHandler() {
        Alert.alert('', 'Are you sure to exit ?', [
            {
                text: 'No',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Yes',
                onPress: () => BackHandler.exitApp(),
            }]
            );
            return true;
    }

    useBackHandler(isFocused ? backActionHandler:()=>false);



    
    const ListOptions = () => {
        const optionsList = [
            { title: 'Mumbai', img: require('../assets/images/mumbai.jpg') },
            { title: 'Delhi', img: require('../assets/images/delhi.png') },
            { title: 'Kolkata', img: require('../assets/images/kolkata.png') },
            { title: 'Banglore', img: require('../assets/images/banlore.png') },
        ];
        return (
            <SafeAreaView   style={{ flex: 1, }}>
            <View style={{
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                display: "flex",
                overflow: 'hidden', 
                height: 200,
              }}>
                <FlatList
                  data={optionsList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                    onPress={handleplacehome}
                      style={styles.optionCardContainer}
                    >
                      <Image source={item.img} style={styles.optionCardImagetop} />
                      <Text style={{ marginTop: 11, fontSize: 18, color: COLORS.dark }}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  contentContainerStyle={styles.optionListContainertop}
                  style={{ flex: 1 }} 
                />
              </View></SafeAreaView>
              
        );
    }
    

    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle='dark-content'
            />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <EntypoIcon style={{ marginTop: 7, marginRight: 8 }} name="location" size={30} color="#15beae" />
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>Current Location</Text>
                        <Text style={{ color: "#15beae", fontSize: 19, fontWeight: 'bold' }}>
                            {location}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{ marginTop: 7, fontSize: 12, marginRight: 5, textAlign: 'right' }}>Welcome Back</Text>
                        <Text style={{ fontSize: 16, fontweight: 'bold', marginRight: 5, textAlign: 'right', color: COLORS.dark }}>{PersonName}</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate("UserProfile")}>
                        <View>
                            <Image source={require("../assets/images/house.jpg")} style={styles.profileImage} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={"#15beae"} />
                        <TextInput placeholder='Search location' />
                    </View>
                    <View style={styles.sortbtn}>
                        <Icon name='tune' color={COLORS.white} size={25} />
                    </View>

                </View>
                <ListOptions />

              
            </ScrollView>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
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
    optionListContainertop: {
        flexDirection: 'row',
      paddingHorizontal: 20,
  },
    optionCardImagetop: {
      height: 80,
      borderRadius: 10,
      width: '100%',
      
  },
    optionListtexttopseach:{
      marginTop: 14,
      marginLeft: 25,
    },
    optionCardContainer: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        elevation: 15,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 30,
        marginTop:35,
        marginRight:15,
        marginBottom: 25,
        paddingHorizontal: 10,
    
    },
});

export default PlacesScreen;