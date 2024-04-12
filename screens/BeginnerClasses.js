import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';

const BeginnerClasses = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showText, setShowText] = useState(true);
  const [enrolledClass, setEnrolledClass] = useState(null); // storing enrolled class name to use later

  const enrollNow = () => {
    if (selectedButton) {
      setEnrolledClass(selectedButton); // store class name. below, send it as a parameter to finance
      navigation.navigate('Finance', { enrolledClass: selectedButton }); 
    }
  };

  const handlePress = (level) => { //debugging code
    console.log(`${level} Pressed`);
    setSelectedButton(level);
    setShowText(false);
  };

  const buttonTexts = {
    'Intro to Equipment and Court': {
      text: 'Get started with the basics!',
      classInfo: 'Our Intro to Equipment and Court class is perfect for beginners who want to learn the fundamentals of tennis. You will be introduced to the basic equipment, court layout, and rules of the game in a fun and supportive environment.',
    },
    'Basic Strokes': {
      text: 'Master the essential tennis strokes!',
      classInfo: 'In our Basic Strokes class, you will learn the fundamental tennis strokes, including forehand, backhand, volley, and serve. Our experienced coaches will break down each stroke, providing personalized feedback to help you improve your technique.',
    },
    'Live Ball Drills': {
      text: 'Take your game to the next level!',
      classInfo: 'Join our Live Ball Drills class for an intense and challenging training session. This class focuses on dynamic drills and match-like scenarios to improve your footwork, shot selection, and decision-making under pressure. Get ready to elevate your game!',
    },
    'Footwork and Movement': {
      text: 'Enhance your agility and speed!',
      classInfo: 'Our Footwork and Movement class is designed to improve your agility, speed, and court coverage on the tennis court. Through a series of drills and exercises, you will develop better footwork and movement patterns, allowing you to move more efficiently and effectively during matches.',
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
      <Text style={styles.heading}>Beginner Classes</Text>
      <View style={styles.buttonContainer}>
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
            style={[styles.Backbutton, { backgroundColor: ' #FF007F' }]}
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
    backgroundColor: '#FF69B4',
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

export default BeginnerClasses;
