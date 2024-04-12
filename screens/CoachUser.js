import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const CoachUser = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{user.slice(2)}</Text>
      </View>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/ball.webp')} style={styles.logo} />
        <Text style={styles.information}>{user}</Text>
        <Text style={styles.information}>King</Text>
        <Text style={styles.information}>{user}.Sharleen@gmail.com</Text>
        <Text style={styles.information}>647-889-9990</Text>
        <Text style={styles.normalTxt}>Edit Information</Text>
      </View>

      
     
        {/* footer with icons */}
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
    backgroundColor: '#FFB6C1',
  },
  header: {
    backgroundColor: '#FFA6C9',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'black',
  },
  normalTxt: {
    color: 'gray',
    fontSize: 15,
    bottom: 20,
    textDecorationLine: 'underline',
  },
  information: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#425c3b',
    backgroundColor: '#FFA6C9',
    justifyContent: 'center',
    borderWidth: 1,
    // paddingHorizontal: 100,
    paddingVertical: 15,
    textAlign: 'center', 
    width: 300,
    marginBottom: 20, 
    borderRadius:10,
    bottom: 20,
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
    bottom: 50,
    alignItems: 'center',
  },
  logo: {
    width: 90, 
    height: 90,
    marginBottom: 20,
    bottom:20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F4C2C2',
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

export default CoachUser;
