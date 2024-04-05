import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const CoachSchedulePage = ({navigation, route}) => {
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
        <Text style={styles.heading}>Upcoming Events</Text>
      </View>

      {/* rectangles and event info */}
      <Image
        source={{ uri: "https://i.gyazo.com/719950713d490bf70035db689e1e2dab.png" }}
        style={styles.logo}/>
      {/* edit event button */}
      <View style={styles.containerBtn}>

        <TouchableOpacity
            onPress= {() => navigation.navigate("CoachEditSchedulePage", {user:user})}
            style= {styles.btn}>
            <Text style= {styles.textBtn} >Edit Session</Text>
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
    backgroundColor: '#E8F8D8',
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
    backgroundColor: '#E8F8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textBtn: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
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
  
  header: {
    backgroundColor: '#CCE5B3',
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
    backgroundColor: "#CAE19D",
    borderColor: 'gray',
    borderWidth: 1,
    width: "20%",
  },
  
  containerBtn: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  logo: {
    width: "107%",
    height: 220,
    // marginBottom: 1, 
    // position: 'absolute',
    left:3,
    top: 60,
    
  },
});

export default CoachSchedulePage;