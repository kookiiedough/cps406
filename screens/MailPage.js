import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MailPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Inbox</Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/open.png')} style={styles.logo} />
        <Text style={styles.mail}> No messages right now.</Text>
        <Text style={styles.mail}>Check back later!</Text>
      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>
         {/* Icon 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
          <Image source={require("../assets/find.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
          <Image source={require("../assets/calendar.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 3 */}
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
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
    backgroundColor: '#E8F8D8',
  },
  header: {
    backgroundColor: '#CCE5B3',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1, 
  },
  mail: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#425c3b',
    backgroundColor: '#CCE5B3',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
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
    backgroundColor: '#C0E19E',
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

export default MailPage;
