import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const CoachInvoice = ({navigation, route}) => {
  // const navigation = useNavigation();
  const {user} = route.params;

  return (
    <View style={styles.containerOld}>

      <View style={styles.header}>
        <Text style={styles.heading}>{user.slice(2)}</Text>
      </View>
      
      {/* for mail icon */}
      <View style={styles.emailContainer}>
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachMail', {user:user})]}>
          <Image source={require('../assets/email.png')} style={styles.topRightImage} />
        </TouchableOpacity>
      </View>

      {/* //ACTUAL CONTENT */}
      <View style={styles.confirmedL}>
        <Text style= {styles.textR}>Confirmed Sessions:</Text>
        <Text style={styles.textL}>3</Text>
      </View>

      <View style={styles.confirmedR}>
        <Text style={styles.textR}>Income:</Text>
        <Text style={styles.textL}>$200</Text>
      </View>

      <View style={styles.confirmedM}>
        <Text style={styles.textM}>Upcoming Sessions:</Text>
        <Text style={styles.textMInB}>      Class                                  Duration</Text>
        <Text style={styles.textMIn}> Intro to Stokes                                 2 hrs</Text>
        <Text style={styles.textMInTXT}> Tactical Training                               2 hrs</Text>
        <Text style={styles.textMInLast}> Stroke Refinement                           2 hrs</Text>

      </View>

      <View style={styles.containerBtn}>

        <TouchableOpacity
            onPress= {() => navigation.navigate("CoachInvoice", {user:user})}
            style= {styles.btn}>
            <Text style= {styles.textBtn} >Request Session Changes</Text>
        </TouchableOpacity>

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
  containerOld: {
    flex: 1,
    backgroundColor: '#E8F8D8',
  },

  container: {
    flex: 1,
    backgroundColor: '#E8F8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: '#C0E19E',
    opacity: 0.8,
    borderRadius: 20,
    marginVertical: 10,
  },
  confirmedL: {
    left:15,
    bottom: 540,
    width: 170,
    height: 70,
    backgroundColor: '#C0E19E',
    opacity: 0.8,
    borderRadius: 30,
    position: 'absolute',
  },
  confirmedR: {
    right:15,
    bottom: 540,
    width: 170,
    height: 70,
    backgroundColor: '#C0E19E',
    opacity: 0.8,
    borderRadius: 30,
    position: 'absolute',
  },
  confirmedM: {
    // right:15,
    top: 270,
    alignSelf:'center',
    bottom: 100,
    width: 350,
    height: 220,
    backgroundColor: '#C0E19E',
    opacity: 0.8,
    borderRadius: 25,
    position: 'absolute',
  },
  textM: {
    position: 'absolute',
    top: -25, // Align text to the top of the parent container
    left: 14, // Align text to the left of the parent container
    width: '110%', // Make the text cover the entire width of the parent container
    height: '100%', // Make the text cover the entire height of the parent container
    textAlign: 'left', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically
    fontSize: 16,
  },
  textMIn: {
    position: 'absolute',
    top: 45, // Align text to the top of the parent container
    left: -30, // Align text to the left of the parent container
    width: '110%', // Make the text cover the entire width of the parent container
    height: '100%', // Make the text cover the entire height of the parent container
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically
    paddingTop:10,
    paddingBottom: 10,
  },
  textMInTXT: {
    position: 'absolute',
    left: 30, // Align text to the left of the parent container
    top: 85,
    paddingTop:10,
    paddingBottom: 10,
  },
  textMInLast: {
    position: 'absolute',
    left: 30, // Align text to the left of the parent container
    top: 125,
    paddingTop:10,
    paddingBottom: 10,
  },
  textMInB: {
    position: 'absolute',
    top: 25, // Align text to the top of the parent container
    left: -25, // Align text to the left of the parent container
    width: '110%', // Make the text cover the entire width of the parent container
    height: '100%', // Make the text cover the entire height of the parent container
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically
    fontSize: 16,
    fontWeight:'bold',
    color:'#555555',
  },
  textR: {
    position: 'absolute',
    top: -25, // Align text to the top of the parent container
    left: -9, // Align text to the left of the parent container
    width: '110%', // Make the text cover the entire width of the parent container
    height: '100%', // Make the text cover the entire height of the parent container
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically
    fontSize: 16,
  },
  textL: {
    position: 'absolute',
    top: 25, // Align text to the top of the parent container
    left: -9, // Align text to the left of the parent container
    width: '110%', // Make the text cover the entire width of the parent container
    height: '100%', // Make the text cover the entire height of the parent container
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically
    fontWeight:'bold',
    fontSize: 20,
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
  heading: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#CCE5B3',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'black',
  },
  btn: {
    top:450,
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 8,
    marginHorizontal: 1,
    marginBottom: 10,
    marginTop: 1,
    minWidth:300,
    margin: 50,
    alignItems: 'center',
    alignSelf: "center",
    // backgroundColor: "#CAE19D",
    borderColor: 'gray',
    borderWidth: 1,
    width: "20%",
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

});

export default CoachInvoice;