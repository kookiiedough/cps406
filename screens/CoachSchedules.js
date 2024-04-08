import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'August 2024', value: '1' },
  { label: 'July 2024', value: '2' },
  { label: 'June 2024', value: '3' },
  { label: 'May 2024', value: '4' },
  { label: 'April 2024', value: '5' },
  { label: 'March 2024', value: '6' },
  { label: 'February 2024', value: '7' },
  { label: 'January 2024', value: '8' },
  { label: 'December 2023', value: '9' },
  { label: 'November 2023', value: '10' },
  { label: 'October 2023', value: '11' },
  { label: 'September 2023', value: '12' },
];

const CoachSchedules = () => {
    const [titleText, setTitleText] = useState("Coach Schedules ");
    const bodyText = 'View old schedules as well as add and edit new and upcoming events. Once changes are made, you can then mail the schedule to the coach.';

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value == 6) {
        return (
          <Image
        style={styles.calendar}
        source={require('../assets/cal.png')}
        resizeMode="contain"
      />
        );
      }
      return null;
    };


    return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>

      {/* Footer with icons */}
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("IncomeStatement")]}
          style={styles.btn}
        >
          <Image source={require("../assets/nav_home.png")} style={styles.footerIcon} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => [navigation.navigate("UnpaidDebts")]}
          style={styles.btn}
        >
          <Image source={require("../assets/Search.png")} style={styles.footerIcon2} resizeMode="contain"/>
        </TouchableOpacity>

      </View>

{/* Month and Year */}


<Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={293.5}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Month and Year' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'green' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />

{/* Calendar */}

{renderLabel()}  

{/* Send Icon */}
<View style={styles.containerBtn1}>
        <TouchableOpacity 
          onPress={() => [Alert.alert("\nSCHEDULE HAS BEEN SENT!"),]}
          style={styles.btn1}
        >
          <Image source={require("../assets/send.png")} style={styles.footerIcon3} resizeMode="contain" />
        </TouchableOpacity>
      </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#E8F8D8',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
    baseText: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      fontSize: 16,
      textAlign: 'left',
      maxWidth: '100%',
      position: 'absolute',
      top: 20,
      },
    titleText: {
        fontSize: 32,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#C0E19E',
      //paddingHorizontal: 20,
      paddingVertical: 10, // Adjust this value to change the height of the footer
      width: '100%', 
      position: 'absolute', 
    },
    footerIcon: {
      paddingBottom: 0,
      position: 'absolute',
      width: 70,
      height: 100,
      left: 35,
      bottom: -360,
    },
    footerIcon2: {
      paddingBottom: 0,
      position: 'absolute',
      width: 200,
      height: 150,
      bottom: -388,
    },
    footerIcon3: {
      paddingBottom: 0,
      position: 'absolute',
      width: 60,
      height: 64,
      bottom: 48.5,
      left: 170,
    },
    containerBtn: {
      alignItems: "center",
      // display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderBottomWidth: 0,
      position: 'absolute',
      paddingRight: 50,
  },
  containerBtn1: {
    alignItems: "center",
    // display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 0,
    position: 'absolute',
    paddingRight: 50,
},
  btn: {
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 150,
      marginTop: 30,
      margin: 60,
      // padding: 20,
      width: "30%",
  },
  btn1: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 150,
    marginTop: 30,
    margin: 60,
    // padding: 20,
    width: "30%",
    backgroundColor: '#E8F8D8',
},
  dropdown: {
    height: 50,
    bottom:420,
    left: 19,
    width: 260,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    position: 'absolute',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  calendar: {
    width: 350,
    height: 300,
    marginBottom: -180,
  },
})


export default CoachSchedules;