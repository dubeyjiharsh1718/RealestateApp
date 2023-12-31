import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
import { Surface } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

const Action = ({ icon, title, screen }) => {
  return (
    <View style={styles.action}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={23} color={'white'} />
        </View>
        <Text style={styles.actionTitle}>
          {title}
        </Text>
      </View>
      <Icon name={'chevron-right'} size={25} color={'#15273F'} />
    </View>
  )
}

export default function Profileowner({ navigation }) {

  var fullname = "Harsh Dubey";
  var useremail = "dubeyharsh@gmail.com";
  profileImage = require("../../assets/images/house.jpg");


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/*  */}
      <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name='arrow-left'
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{}}>
          <Text style={styles.headerText}>Account</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Pressable>
            <Feather
              name='share-2'
              size={25}
              style={{ color: '#15273F' }}
            />
          </Pressable>
        </View>
      </Surface>
      {/*  */}
      
      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImageStyle} />
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.accountTitle}>{fullname}</Text>
          <Text style={{ fontFamily: "sans-serif-light", fontSize: 14, color: "gray" }}>{useremail}</Text>
        </View>
      </View>
      {/* <View style={styles.action}></View> */}
      
      {/*  */}
      <ScrollView>
      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'home'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Properties
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>
      {/*  */}
      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'man'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Tenents
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'money'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Transaction
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'building'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Properties
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'mail'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Documents
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Properties")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'flag'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            Reports
            </Text>
          </View>
          <Icon name={'chevron-right'} size={25} color={'#15273F'} />
        </View>
      </Pressable>
      {/* <Action title={'Edit Profile'} icon={'edit'} /> */}
      </ScrollView>
      

      {/*  */}
      <Pressable onPress={() => navigation.navigate("Login")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'logout'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#F25B68' }]}>
              Logout
            </Text>
          </View>
        </View>
      </Pressable>
      {/*  */}

      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-light' }}>Version: 0.0.1</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

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
    color: '#15273F'
  },
  profileInfo: {
    marginTop: 10,
    paddingHorizontal: 29,
    flexDirection: 'row',
    alignItems: 'center',

  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center'

  },
  profileImageStyle: {
    height: 115,
    width: 115,
    borderRadius: 60,
  },
  accountTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    fontWeight: '600',
    color: "#15273F"
  },
  nameSection: {
    marginLeft: 35,
  },
  action: {
    marginTop: 19,
    paddingHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#15beae',
    justifyContent: "center",
    alignItems: 'center'
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 20,
    color: "#15273F",
  }

})