import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native';

const PaymentSuccess = ({navigation, route}) => {
    const {enrolledClass} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Email Icon */}
        <TouchableOpacity
            style={styles.topRightImage}
            onPress={() => {
              console.log(`Mail Pressed`);
              navigation.navigate('Mail');
            }}>
            <Image source={require('../assets/email.png')} style={styles.topRightImage} />
          </TouchableOpacity>
        <View style={styles.topContent}>
          {/* Credit Card Image */}
          <View style={styles.cardContainer}>
              <Image source={require('../assets/check-mark.png')} style={styles.logo} />
          </View>
          {/* Text for Payment Details */}
          <Text style={styles.heading}>Payment Processed</Text>
          <Text style={styles.info}> You have successfully enrolled into {enrolledClass}. You can find class details on your class schedule page!</Text>
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
            onPress={() => { navigation.navigate('User') }}>
            <Image source={require("../assets/user.png")} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topRightImage: {
      position: 'absolute',
      top: 15,
      right: 10,
      width: 60,
      height: 60,
    },
    info: {
      bottom: 35,
      alignItems: 'center',
      fontSize: 18,
      color: '#425c3b',
      backgroundColor: '#a3c999',
      marginBottom: 100,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      textAlign: 'center', 
      borderWidth: 8,
      borderColor: '#CEE4B9'
    },
    topContent: {
      alignItems: 'center',
      marginBottom: 30,
      marginTop: 0,
    },
    cardContainer: {
      alignItems: 'center',
    },
    logo: {
      width: 70,  
      height: 70, 
      bottom: 20,
    },
    heading: {
      fontSize: 20,
      bottom: 30,
      marginBottom: 20,
      marginTop: 20,
      fontWeight: 'bold',
    },
    formContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      borderRadius: 25,
      paddingVertical: 5,
      paddingHorizontal: 10,
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
    footerIcon: {
      width: 55,
      height: 55,
    },
  });

export default PaymentSuccess;