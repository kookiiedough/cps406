import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';

const AdvancedClasses = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showText, setShowText] = useState(true);
  const [enrolledClass, setEnrolledClass] = useState(null); 

  const handlePress = (level) => {
    console.log(`${level} Pressed`);
    setSelectedButton(level);
    setShowText(false);
  };

  const enrollNow = () => {
    if (selectedButton) {
      setEnrolledClass(selectedButton); 
      navigation.navigate('Finance', { enrolledClass: selectedButton });
    }
  };

  const buttonTexts = {
    'Technical Analysis and Correction': {
      text: 'Improve your strokes with our professional coaches!',
      classInfo: 'Our Technical Analysis and Correction class offers personalized coaching from our experienced instructors to enhance your tennis strokes. Through detailed analysis and corrective feedback, you will refine your technique and improve your performance on the court.',
    },
    'Tactical Training': {
      text: 'Learn advanced tactics from our expert instructors!',
      classInfo: 'Join our Tactical Training class to master advanced tennis tactics and strategies. Our instructors will guide you through various tactical scenarios, teaching you how to outsmart your opponents and gain a competitive edge.',
    },
    'Pressure Situations': {
      text: 'Enhance your skills with intense live ball drills!',
      classInfo: 'Experience intense live ball drills in our Pressure Situations class. This challenging training session replicates real match situations, helping you improve your footwork, decision-making, and mental toughness under pressure.',
    },
    'Advanced Serving Techniques': {
      text: 'Elevate your serving game with our expert guidance!',
      classInfo: 'Join our Advanced Serving Techniques class to learn a variety of advanced serving techniques from our experienced instructors. From spin serves to placement strategies, you will gain the skills and confidence to dominate your opponents with your serve.',
    },
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topRightImage}
        onPress={() => {
          console.log(`Mail Pressed`);
          navigation.navigate('Mail');
        }}>
        <Image source={require('../assets/email.png')} style={styles.topRightImage} />
      </TouchableOpacity>
      <Text style={styles.heading}>Advanced Classes</Text>
      <View style={styles.buttonContainer}>
        {/* Buttons */}
        {Object.keys(buttonTexts).map((level) => (
          selectedButton === null && (
            <TouchableHighlight
              key={level}
              style={[styles.button, { backgroundColor: '#FF007F' }]}
              onPress={() => handlePress(level)}>
              <Text style={styles.buttonText}>{level}</Text>
            </TouchableHighlight>
          )
        ))}

        {/* Text based on selected button */}
        {selectedButton && (
          <>
            <Text style={styles.buttonDescription}>{buttonTexts[selectedButton].text}</Text>
            <View style={styles.classInfoContainer}>
              <Text style={styles.classInfo}>{buttonTexts[selectedButton].classInfo}</Text>
            </View>
          </>
        )}

        {/* Go Back Button */}
        {selectedButton && (
          <TouchableHighlight
            style={[styles.Backbutton, { backgroundColor: '#FF007F' }]}
            onPress={() => handlePress(null)}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableHighlight>
        )}

        {/* Enroll Now Button */}
        {selectedButton && (
          <TouchableHighlight
            style={[styles.Backbutton, { backgroundColor: '#FF007F' }]}
            onPress={enrollNow}>
            <Text style={styles.buttonText}>Enroll Now</Text>
          </TouchableHighlight>
        )}
      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>
        {/* Icon 1 */}
        <TouchableOpacity
          onPress={() => {
            console.log(`Browse Class Pressed`);
            navigation.navigate('Browse')
          }}>
          <Image source={require("../assets/find.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 2 */}
        <TouchableOpacity
          onPress={() => {}}>
          <Image source={require("../assets/calendar.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        {/* Icon 3 */}
        <TouchableOpacity
          onPress={() => {}}>
          <Image source={require("../assets/user.png")} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  
    heading: {
      padding: 10,
      fontSize: 20,
      top: 80,
      position: 'absolute',
      marginTop: 70,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#425c3b',
      borderWidth: 1, 
      borderColor: 'black', 
      borderRadius: 10,
      textAlign: 'center',
      backgroundColor: 'transparent', 
    },
    
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '90%',
      marginBottom: 0,
    },
    buttonDescription: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    classInfoContainer: {
      backgroundColor: '#CCE5B3',
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 20,
    },
    classInfo: {
      textAlign: 'center',
      color: '#425c3b'
    },
    Backbutton: {
      borderRadius: 25,
      marginHorizontal: 1,
      marginBottom: 20,
      minWidth: 100,
    },
    button: {
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 1,
      marginBottom: 20,
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

export default AdvancedClasses;
