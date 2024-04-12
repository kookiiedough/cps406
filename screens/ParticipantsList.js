import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const ParticipantsList = ({navigation, route}) => {
  // const navigation = useNavigation();
  const {user} = route.params;

  return (
    <View style={styles.containerOld}>

      {/* for mail icon */}
      <View style={styles.emailContainer}>
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachMail', {user:user})]}>
          {/* <Image source={require('../assets/email.png')} style={styles.topRightImage} /> */}
          <Image source={require('../assets/email.png')} style={styles.topRightImage} />
        </TouchableOpacity>
      </View>

        {/* upcoming events header */}
      <View style={styles.logoContainer}>
        <Text style={[styles.heading, {top:20, left:30}]}>Basic Strokes</Text>
      </View>

      {/* image */}
      <View style={styles.logoContainer}>
        {/* <Image source={require('../assets/profileTennis.png')} style={styles.logo} /> */}
        <Image
        source={{ uri: "https://i.gyazo.com/e0747bcdaa3a7b64820ed373df04e1db.png" }}
        style={styles.logo}/>

        <Text style={[{top:50, fontSize:18, left:130}]}>Participants:</Text>
        <Image
        source={{ uri: "https://i.gyazo.com/b9fb4555886ac514eda8c32fac105306.png" }}
        style={styles.logoParticipants}/>


      </View>


      {/* Footer with icons */}
      <View style={styles.footer}>

        {/* coach invoice page */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachInvoice', {user:user})]}>
          {/* <Image source={require("../assets/coachInvoice.png")} style={styles.footerIcon} /> */}
          <Image source={require("../assets/coachInvoice.png")} style={styles.invIcon} />

        </TouchableOpacity>


        {/* coach home / scheule page */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('HomeCoach', {user:user})]}>
          {/* <Image source={require("../assets/calendar.png")} style={styles.footerIcon} /> */}
          <Image source={require("../assets/calendar.png")} style={styles.calenIcon} />

        </TouchableOpacity>

        {/* Icon 3 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachUser', {user:user})]}>
          {/* <Image source={require("../assets/user.png")} style={styles.footerIcon} /> */}
          <Image source={require("../assets/user.png")} style={styles.userIcon} />

        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  }

const styles = StyleSheet.create({
  containerOld: {
    flex: 1,
    backgroundColor: '#FFB6C1',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  topRightImage: {
      width: 40,
      height: 40,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C0E19E',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%', 
    position: 'absolute', 
    bottom: 0, 
  },
  invIcon: {
    width: 58,
    height: 58,
  },

  calenIcon: {
    width: 60,
    height: 60,
  },

  userIcon: {
    width: 50,
    height: 50,
  },
  heading: {
    fontSize:18,
    fontWeight: 'bold',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 20,  
    width: 270,
    textAlignVertical: 'center',
    textAlign: 'center',
    lineHeight:50,
    top:18,
    left: 20,
  },

  textBtn: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  
  containerBtn: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  logo: {
    width: 110, 
    height: 110,
    marginBottom: 5,
    top:35,
    left: 130,
  },

  logoParticipants:{
    width: 280, 
    height: 380,
    marginBottom: 5,
    top:55,
    left: 50,
  }
});

export default ParticipantsList;