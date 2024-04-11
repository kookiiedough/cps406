//loading page.js = import statements, jsx elements, and exporting it
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


// importing naviagtion
import { useNavigation } from "@react-navigation/native";

//importing stylesheet 
// import {styles} from "../CSS/styles"


const LoadingPage = () => {

    const navigation=useNavigation();

    return (
        <View style= {styles.container}>
            {/* <Text style= {styles.h1}>LoadingPage</Text>  */}
            {/* makeing loading page a header */}

            <Image
                source={"../assets/slllogo.webp"}
                style={styles.logo}
            />

            <View style={styles.containerBtn}>

                <TouchableOpacity
                    onPress= {() => navigation.navigate("MemberCreateAccount")}
                    style= {styles.btn}>
                    <Text style= {styles.textBtn} >Get Started</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};



//STYLESHEET
const styles= StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFD1DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btn: {
    bottom:40,
    borderRadius: 50,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginHorizontal: 1,
    marginBottom: 10,
    marginTop: 1,
    minWidth: 180,
    margin: 50,
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: "#FF69B4",
    width: "20%",
  },

  textBtn: {
    fontSize: 21,
    textAlign: 'center',
    paddingVertical: 10,
  },
  
  containerBtn: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  h1: {
    fontSize: 28,
    marginVertical: 25,
    textAlign: "center",
  },

  logo: {
    width: 350,
    height: 175,
    // marginBottom: 1, 
    // position: 'absolute',
    right: 8,
    bottom: 50,
  },
  
});

export default LoadingPage;