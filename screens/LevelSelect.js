import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const LevelSelect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mail');}}>
          <Image source={require('../assets/email.png')} style={styles.topRightImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/tennis.png')} style={styles.logo} />
        <Text style={styles.heading}>Select a Level</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF007F' }]}
          onPress={() => [navigation.navigate('Beginner')]}
        >
          <Text style={styles.buttonText}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF007F' }]}
          onPress={() => [navigation.navigate('Intermediate')]}
        >
          <Text style={styles.buttonText}>Intermediary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF007F' }]}
          onPress={() => [navigation.navigate('Advanced')]}
        >
          <Text style={styles.buttonText}>Advanced</Text>
        </TouchableOpacity>
      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>
         {/* Icon 1 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('Browse')]}>
          <Image source={require("../assets/find.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 2 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('UpcomingEventsFilled')]}>
          <Image source={require("../assets/calendar.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 3 */}
        <TouchableOpacity
          onPress={() => [navigation.navigate('User')]}>
          <Image source={require("../assets/user.png")} style={styles.footerIcon} />
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
    bottom: 60,
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    bottom: 45,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
  },
  button: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    backgroundColor: '#FFB6C1',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%', 
    position: 'absolute', 
    bottom: 0, 
  },
  footerIcon: {
    width: 55,
    height: 55,
  },
});

export default LevelSelect;