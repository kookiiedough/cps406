import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const CoachEditSchedulePage = ({navigation, route}) => {
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
        <Text style={[styles.heading, {top:-40, left:-30}]}>Basic Strokes</Text>
      </View>



      <View style={styles.logoContainer}>
        {/* <Image source={require('../assets/profileTennis.png')} style={styles.logo} /> */}
        <Image
        source={{ uri: "https://i.gyazo.com/e0747bcdaa3a7b64820ed373df04e1db.png" }}
        style={styles.logo}/>

        <Text style={styles.head}>Class Title:</Text>
        <Text style={styles.information}>Basic Strokes</Text>
        <Text>Start Time:</Text>
        <Text style={styles.information}>9:00 AM</Text>
        <Text>End Time:</Text>
        <Text style={styles.information}>11:00 Am</Text>
        <Text>Location:</Text>
        <Text style={styles.information}>Ace Court</Text>
      </View>


    
        {/* participants and sending message button */}
      <View style={styles.containerBtn}>

        <TouchableOpacity
            onPress= {() => navigation.navigate("ParticipantsList", {user:user})}
            style={[styles.btn, { width: 300, top: 50, marginTop: 20 , left:-1}]}>
            <Text style= {styles.textBtnBasic} >View Participants</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress= {() => navigation.navigate("CoachEditSchedulePage", {user:user})}
            style={[styles.btn, { width: 300, top: -5, marginTop: 20 , left:-1}]}>
            <Text style= {styles.textBtn} >Send Message to All Participants</Text>
        </TouchableOpacity>

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
  information: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#425c3b',
    backgroundColor: '#ffc0cb',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 100,
    paddingVertical: 7,
    textAlign: 'center', 
    width: 300,
    marginBottom: 2, 
    borderRadius:10,
    bottom: 20,
  },
  normalTxt: {
    color: 'gray',
    fontSize: 15,
    bottom: 20,
    textDecorationLine: 'underline',
  },
  logoContainer: {
    // flex: 1,
    justifyContent: 'center', //useful
    // bottom: 100,
    bottom: -60,
    alignItems: 'center',
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
  Container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textBtn: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  textBtnBasic: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    top: 0,
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

  buttonContainer: {
    bottom: 45,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
  },
  button: {
    bottom: 70,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 1,
    marginBottom: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eba1ae',
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
  
  header: {
    backgroundColor: '#f8889c',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'black',
  },
  btn: {
    left:115,
    top:25,
    borderRadius: 50,
    paddingVertical: 1,
    // paddingHorizontal: 8,
    // marginBottom: 10,
    marginTop: 1,
    minWidth:130,
    margin: 50,
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: "#FFA6C9",
    borderColor: 'gray',
    borderWidth: 1,
    width: "20%",
  },

  logo: {
    width: 90, 
    height: 90,
    marginBottom: 5,
    top:-15,
  },

  
});

export default CoachEditSchedulePage;