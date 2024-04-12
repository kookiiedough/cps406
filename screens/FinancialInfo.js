import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native';
import PaymentSuccess from './PaymentSuccess';

const FinancialInfo = ({ navigation, route }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const { enrolledClass } = route.params; // Access the enrolled class name from the route parameters

  const handlePress = () => {
    console.log(`Card Number:`, cardNumber);
    console.log(`Security Code:`, securityCode);
    console.log(`Expiry Date:`, expiryDate);
    // Handling form submission 
    if (cardNumber.length === 16 && securityCode.length === 3 && expiryDate.length === 4) {
        navigation.navigate('Success', { enrolledClass: enrolledClass });
    } else {
        navigation.navigate('Failure', { enrolledClass: enrolledClass });
        console.log('Invalid input. Please check your card details.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
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
            <Image source={require('../assets/credit-card.png')} style={styles.logo} />
          </View>
          {/* Text for Payment Details */}
          <Text style={styles.heading}>Payment Details</Text>
          {/* Display enrolled class name */}
          <Text>Payment for Class: {enrolledClass}</Text>
        </View>
        {/* Form inputs */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            onChangeText={setCardNumber}
            value={cardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Security Code"
            onChangeText={setSecurityCode}
            value={securityCode}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date"
            onChangeText={setExpiryDate}
            value={expiryDate}
          />
          <TouchableHighlight
            style={[styles.button, { backgroundColor: '#CF6BA9' }]}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>

        {/* Footer with icons */}
        <View style={styles.footer}>
          {/* Icon 1 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Browse')}>
            <Image source={require("../assets/find.png")} style={styles.footerIcon} />
          </TouchableOpacity>
          {/* Icon 2 */}
          <TouchableOpacity
            onPress={() => {
              /* navigation.navigate('Calendar') */
            }}>
            <Image source={require("../assets/calendar.png")} style={styles.footerIcon} />
          </TouchableOpacity>
          {/* Icon 3 */}
          <TouchableOpacity
            onPress={() => {
              /* navigation.navigate('User') */
            }}>
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
  topContent: {
    alignItems: 'center',
    marginBottom: 50,
  },
  cardContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 80, 
    height: 80, 
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  formContainer: {
    alignItems: 'center',
    bottom:30,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 80,
    marginBottom: 20,
    borderRadius: 30,

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
    paddingVertical: 4,
    paddingHorizontal: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#CF6BA9',
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

export default FinancialInfo;
