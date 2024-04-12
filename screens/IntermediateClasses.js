import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';

const IntermediateClasses = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showText, setShowText] = useState(true);
  const [enrolledClass, setEnrolledClass] = useState(null); // State to store the enrolled class name

  const handlePress = (level) => {
    console.log(`${level} Pressed`);
    setSelectedButton(level);
    setShowText(false);
  };

  const enrollNow = () => {
    if (selectedButton) {
      setEnrolledClass(selectedButton); // Store the name of the enrolled class
      navigation.navigate('Finance', { enrolledClass: selectedButton });
    }
  };

  const buttonTexts = {
    'Stroke Refinement': {
      text: 'Improve your strokes with our professional coaches!',
      classInfo: 'Our Stroke Refinement class focuses on enhancing your tennis strokes to achieve greater precision and consistency on the court. Led by experienced coaches, this class includes personalized drills and techniques tailored to your skill level.',
    },
    'Advanced Serving Techniques': {
      text: 'Learn advanced serving techniques from our experts!',
      classInfo: 'In our Advanced Serving Techniques class, you will learn a variety of advanced serving techniques to dominate your opponents. Our instructors will teach you proper technique, placement strategies, and tactical insights to elevate your serving game.',
    },
    'Live Ball Drills': {
      text: 'Experience intense live ball drills to enhance your skills!',
      classInfo: 'Join our Live Ball Drills class for a dynamic and challenging training session. This class simulates real match situations with fast-paced drills, allowing you to improve your footwork, shot selection, and decision-making under pressure.',
    },
    'Fitness & Conditioning': {
      text: 'Join our fitness and conditioning classes for a healthier you!',
      classInfo: 'Our Fitness & Conditioning classes are designed to improve your overall fitness level and endurance on the tennis court. Led by certified trainers, these classes incorporate cardio, strength training, and agility exercises tailored to tennis players.',
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
      <Text style={styles.heading}>Intermediate Classes</Text>
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
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color to black
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'transparent', // Make background transparent
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
    backgroundColor: '#FFA6C9',
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
    backgroundColor: '#F4C2C2',
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

export default IntermediateClasses;
