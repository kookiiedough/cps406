import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageScreen from './screens/HomePage';
import LevelSelectScreen from './screens/LevelSelect';
import FinancialInfoScreen from './screens/FinancialInfo';
import BeginnerClassesScreen from './screens/BeginnerClasses'
import IntermediateClassesScreen from './screens/IntermediateClasses';
import AdvancedClassesScreen from './screens/AdvancedClasses';
import PaymentSuccessScreen from './screens/PaymentSuccess';
import PaymentFailureScreen from './screens/PaymentFailure';
import MailPageScreen from './screens/MailPage';
import PersonalDetailsScreen from './screens/PersonalDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitle: "back",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#C0E19E',
          },
          headerTintColor: '#425c3b',
          headerTitle: "Club Cents",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>

        <Stack.Screen component={HomePageScreen} name="Home" options={{ title: "Home" }} />
        <Stack.Screen component={LevelSelectScreen} name="Browse" options={{ title: "Home" }} />
        <Stack.Screen component={BeginnerClassesScreen} name="Beginner" options={{ title: "Beginner" }} />
        <Stack.Screen component={IntermediateClassesScreen} name="Intermediate" options={{ title: "Intermediate" }} />
        <Stack.Screen component={FinancialInfoScreen} name="Finance" options={{ title: "finance" }} />
        <Stack.Screen component={AdvancedClassesScreen} name="Advanced" options={{ title: "advanced" }} />
        <Stack.Screen component={PaymentSuccessScreen} name="Success" options={{ title: "success" }} />
        <Stack.Screen component={PaymentFailureScreen} name="Failure" options={{ title: "failure" }} />
        <Stack.Screen component={MailPageScreen} name="Mail" options={{ title: "mail" }} />
        <Stack.Screen component={PersonalDetailsScreen} name="User" options={{ title: "User" }} />


      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};