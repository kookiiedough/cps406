import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const HomeCoach = ({navigation, route}) => {
  // const navigation = useNavigation();
  const {user} = route.params

  return (
    <View style={styles.container}>

      {/* for mail icon */}
      <View style={styles.emailContainer}>
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachMail', {user:user})]}>
          <Image source={require('../assets/email.png')} style={styles.topRightImage} />
          {/* <Image source={require('../Components/email.png')} style={styles.topRightImage} /> */}
        </TouchableOpacity>
      </View>

      {/* for actual page content */}
      <View style={styles.logoContainer}>
  
        <Text style={styles.heading}>Upcoming Events</Text>
        <Text style={styles.otherTxt}>No scheduled events at the moment, you will be notified when you are chosen to coach...</Text>

      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>

        {/* coach invoice page */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachInvoice', {user:user})]}>
          <Image source={require("../assets/coachInvoice.png")} style={styles.invIcon} />

        </TouchableOpacity>


        {/* coach home / scheule page */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('HomeCoach', {user:user})]}>
          <Image source={require("../assets/calendar.png")} style={styles.calenIcon} />

        </TouchableOpacity>

        {/* Icon 3 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachUser', {user:user})]}>
          <Image source={require("../assets/user.png")} style={styles.userIcon} />

        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  topRightImage: {
      width: 60,
      height: 60,
  },
  logoContainer: {
    flex: 0,
    justifyContent: 'center', //useful
    bottom: 90,
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 10,
  },
  heading: {
    fontSize: 25,
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
  },
  otherTxt: {
    fontSize: 20,
    color: '#767676',
    fontWeight:'bold',
    paddingLeft: 45,
    paddingRight: 45,   
    top: 40, 
    textAlign: 'center',
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
});

export default HomeCoach;