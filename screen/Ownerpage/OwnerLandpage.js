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
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useIsFocused } from '@react-navigation/native'
import COLORS from '../../assets/const/colors'


const { width } = Dimensions.get("screen");

const OwnerLanddpage = ({ navigation }) => {
    var location = "Kalyan";
    var PersonName = "Harsh Dubey";
    //LogBox.ignoreAllLogs();

    const handlAlltenentPress = () => {
      navigation.navigate('Alltenents');
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
        return (
            <View style={styles.ownerLandpage}>
            <View style={styles.ownerhii}>
              <Text style={styles.hiiowner}>Hii, Owner!</Text>
              <Text style={styles.ownerwelcome}>Welcome back</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/addproperty.jpg')} style={styles.image} />
                  <Text>Add Property</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                   onPress={handlAlltenentPress}
                  >
                  <Image source={require('../../assets/images/Buy_a_home.webp')} style={styles.image} />
                  <Text>Add Tenant</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/transaction.jpg')} style={styles.image} />
                  <Text>Add Transaction</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/document.png')} style={styles.image} />
                  <Text>Add Document</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/report.png')} style={styles.image} />
                  <Text>Report</Text>
                </TouchableOpacity><TouchableOpacity
                   style={styles.item}
                  >
                  <Image source={require('../../assets/images/addproperty.jpg')} style={styles.image} />
                  <Text>Tenent</Text>
                </TouchableOpacity>
            </View>
            <View>
            <View style={styles.containerproperty}>
            <Text style={styles.totalProperty}>Total property</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>120</Text>
            </View>
            </View>
            <View style={styles.containeroccupied}>
            <Text style={styles.totalProperty}>Occupied</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>40</Text>
            </View>
            </View>
            <View style={styles.containervacant}>
            <Text style={styles.totalProperty}>Vacant</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>22</Text>
            </View>
            </View>
            </View>
            
          </View>
            
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
                        <Text style={{ color: 'black' }}>Location</Text>
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
                            <Image source={require("../../assets/images/house.jpg")} style={styles.profileImage} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={"#15beae"} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
                    <View style={styles.sortbtn}>
                        <Icon name='tune' color={COLORS.white} size={25} />
                    </View>

                </View> */}
                <ListOptions />

                <FlatList
                    contentContainerStyle={{ paddingLeft: 20, marginVertical: 20 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                   
                />
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
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
         margin: 20,
        justifyContent: 'center',
      },
      ownerLandpage:{
        elevation: 4,
        backgroundColor: COLORS.white,
        margin: 10,
      },
      item: {
        width: '26%', 
        margin: 8,
        alignItems: 'center',
        elevation: 4,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 10,
        marginTop:10,
        padding: 2,
      },
      image: {
        width: '80%',
        height: 50,
        marginBottom:5,
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
    ownerhii: {
        marginLeft: 25,
        marginTop: 20,
    },
    hiiowner:{
        fontSize: 20,
        color: 'black',
    },
    ownerwelcome : {
        fontSize: 16,
    },
    titleforadd:{
        textAlign: "center",
    },
    totalProperty: {
        fontSize: 17, 
        color: 'white',
      },
      valueContainer: {
        marginLeft: 8,
      },
      value: {
        fontSize: 17,
        color: 'white'
      },
      containeroccupied :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        backgroundColor: 'orange',
        padding : 8,
      },
      containervacant:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00b3db',
        padding : 8,
      },
      containerproperty:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        backgroundColor: '#635cbb',
        padding : 8,
      },

});

export default OwnerLanddpage;