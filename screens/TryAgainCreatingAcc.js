//loading page.js = import statements, jsx elements, and exporting it
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image, TextInput, ScrollView} from "react-native";

const TryAgainCreatingAcc = ({navigation, route}) => {

    const { err, msg} = route.params;
    // const {msg} = route.params;

    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            
            <View style={styles.topContent}>
                <Text style={styles.heading}>{msg}</Text>
                <Text style={styles.info}> {err}</Text>
            </View>
    

            <StatusBar style="auto" />
      </View>
    </ScrollView>
    );

};



//STYLESHEET
const styles= StyleSheet.create({

    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#E8F8D8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContent: {
        alignItems: 'center',
        marginBottom: 50,
    },
    heading: {
        fontSize: 19,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    info: {
        // bottom: 35,
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
        borderColor: '#CEE4B9',
        width: 350,
      },


  
});

export default TryAgainCreatingAcc;