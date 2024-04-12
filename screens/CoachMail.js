import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CoachMail = ({navigation, route}) => {

    const {user}= route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Inbox</Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/open.png')} style={styles.logo} />
        <Text style={styles.normalTxt}> No messages right now!</Text>

        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachMail', {user: user})]}>
          <Text style={styles.mail}>Send Message</Text>

        </TouchableOpacity>
      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>

        {/* coach invoice page */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('CoachInvoice', {user:user})]}>
          <Image source={require("../assets/coachInvoice.png")} style={styles.invIcon} />

        </TouchableOpacity>


        {/* coach home / schedule page */}
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
    backgroundColor: '#FFB6C1',
  },
  header: {
    backgroundColor: ' #FF1493',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1, 
  },
  mail: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#425c3b',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    lineHeight: 50,
    backgroundColor: '##F2BDCD',
    top: 30,
  },
  normalTxt: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center', //useful
    bottom: 100,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80, 
    height: 80,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: ' #FF1493',
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

export default CoachMail;
