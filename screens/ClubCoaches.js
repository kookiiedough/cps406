import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ClubCoaches = () => {
  const navigation = useNavigation();
  const handleCellPress = (memberName, students, level) => {
    Alert.alert("Coach Details",
    `Name: ${memberName}\nStudents: ${students}\nLevel: ${level}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>List of Club Coaches</Text>
      
          {/* Display coaches horizontally */}
          <View style={styles.table}>
      <TouchableOpacity onPress={() => handleCellPress("Ahmed Azaiza", 15, "Advanced")} style={styles.row}>
        <Text style={styles.cell}>1. Ahmed Azaiza</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("Hwang Hyunjin", 10, "Advanced")} style={styles.row}>
        <Text style={styles.cell}>2. Hwang Hyunjin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("James Potter", 18, "Advanced")} style={styles.row}>
        <Text style={styles.cell}>3. James Potter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("Luke Skywalker", 12, "Intermediate")} style={styles.row}>
        <Text style={styles.cell}>4. Luke Skywalker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("Yoon Kee-Ho", 22, "Intermediate")} style={styles.row}>
        <Text style={styles.cell}>5. Yoon Kee-Ho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("Serena Williams", 12, "Beginner")} style={styles.row}>
        <Text style={styles.cell}>6. Serena Williams</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCellPress("Seo Changbin", 17, "Beginner")} style={styles.row}>
        <Text style={styles.cell}>7. Seo Changbin</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity 
    //  onPress={() => console.log("Button pressed")}
    onPress={() => [navigation.navigate("ClubMembers")]}
     style={styles.addButton}>
     <Text style={styles.buttonText}>Club Members</Text>
    </TouchableOpacity>

      {/* Footer with icons */}
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("IncomeState")]}
          style={styles.btn}
        >
          <Image source={require("../assets/nav_home.png")} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => [navigation.navigate("ClubCoaches")]}
          style={styles.btn}
        >
          <Image source={require("../assets/Search.png")} style={styles.footerIcon} />
        </TouchableOpacity>

      </View>
        

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#E8F8D8',
      alignItems: 'center',
      justifyContent: 'center',
  },

  btn: {
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 150,
      marginTop: 30,
      margin: 60,
      // padding: 20,
      width: "30%"
  },

  containerBtn: {
      alignItems: "center",
      // display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 200,
  },
  h1: {
      fontSize: 28,
      marginVertical: 25,
      textAlign: "center",
  },

  table: {
      backgroundColor: 'white', // Set background color of the table to white
      borderWidth: 1,
      borderColor: 'black',
      width: 300,
      marginTop: 45,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    cell: {
      flex: 1,
      padding: 10,
    },
    addButton: {
      // position: 'absolute',
      bottom: -10,
      right: -78,
      backgroundColor: 'grey',
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },

  // footer stuff
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#C0E19E',
      paddingHorizontal: 20,
      paddingVertical: 10, // Adjust this value to change the height of the footer
      width: '100%', 
      marginTop: 0, // Adjust this value to control the distance from the content above
      bottom: 0, 
  },

});
export default ClubCoaches;