import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from "@react-navigation/native";


const UpcomingEventsFilled = ({navigation}) => {
  // const navigation = useNavigation();

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
      

      {/* Footer with icons */}
      <View style={styles.footer}>
         {/* Icon 1 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('Browse')]}>
          <Image source={require("../assets/find.png")} style={styles.calenIcon} />
        </TouchableOpacity>
        {/* Icon 2 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('UpcomingEventsFilled')]}>
          <Image source={require("../assets/calendar.png")} style={styles.calenIcon} />
        </TouchableOpacity>
        {/* Icon 3 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('User')]}>
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

  footerIcon: {
    width: 55,
    height: 55,
  },

  logo: {
    // width: "85%",
    // height: 375,
    // // marginBottom: 1, 
    // // position: 'absolute',
    // left:3,
    // top: 50,
    width: "100%",
    height: 220,
    // marginBottom: 1, 
    // position: 'absolute',
    left:3,
    top: 60,
    
  },
});

export default UpcomingEventsFilled;