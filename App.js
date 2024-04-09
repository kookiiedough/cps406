import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Aamna
import LoadingPage from "./screens/LoadingPage";
import MemberCreateAccount from "./screens/MemberCreateAccount";
import MemberSignIn from "./screens/MemberSignIn";
import TryAgainCreatingAcc from "./screens/TryAgainCreatingAcc";
import CoachSignIn from './screens/CoachSignIn';
import HomeCoach from './screens/HomeCoach';
import CoachMail from './screens/CoachMail';
import CoachUser from './screens/CoachUser';
import CoachInvoice from './screens/CoachInvoice';
import CoachSchedulePage from './screens/CoachSchedulePage';
import CoachEditSchedulePage from './screens/CoachEditSchedulePage';
import ParticipantsList from './screens/ParticipantsList';
import UpcomingEventsFilled from './screens/UpcomingEventsFilled';

//reyhan
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

// Rana
import ClubCoaches from './screens/ClubCoaches';
import IncomeState from './screens/IncomeState';
import ClubMembers from './screens/ClubMembers';

//theresa
import TreasurerSignIn  from './screens/TreasurerSignIn';
import IncomeStatement  from './screens/IncomeStatement';
import UnpaidDebts from './screens/UnpaidDebts';
import CoachSchedules from './screens/CoachSchedules';

//Sitara
import TreasurerHomeScreen from "./screens/TreasurerHomeScreen";
import AddDebts from "./screens/AddDebts";
import ProfitTracking from "./screens/ProfitTracking";
import AddProfits from "./screens/AddProfits";
import YearlyProfits from "./screens/YearlyProfits";
import YearlyProfitsWithData from "./screens/YearlyProfitsWithData";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingPage"
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

        <Stack.Screen component={LoadingPage} name="LoadingPage" options={{ title: "Loading Page", headerShown: false}} />
        <Stack.Screen component={MemberCreateAccount} name="MemberCreateAccount" options={{ title: "Member Create Account", headerShown: false }} />
        <Stack.Screen component={MemberSignIn} name="MemberSignIn" options={{ title: "Member Sign In", headerShown: false }} />
        <Stack.Screen component={CoachSignIn} name="CoachSignIn" options={{title: "Coach Sign In"}} />
        <Stack.Screen component={TryAgainCreatingAcc} name="TryAgainCreatingAcc" options={{ title: "Try Again Creating Account"}} />
        <Stack.Screen component={HomeCoach} name="HomeCoach" options={{title: "Home Coach"}} />
        <Stack.Screen component={CoachMail} name="CoachMail" options={{title: "Coach Mail"}} />
        <Stack.Screen component={CoachUser} name="CoachUser" options={{title: "Coach User"}} />
        <Stack.Screen component={CoachInvoice} name="CoachInvoice" options={{title: "Coach Invoice"}} />
        <Stack.Screen component={CoachSchedulePage} name="CoachSchedulePage" options={{title: "Coach Schedule Page"}} />
        <Stack.Screen component={CoachEditSchedulePage} name="CoachEditSchedulePage" options={{title: "Coach Edit Schedule Page"}} />
        <Stack.Screen component={ParticipantsList} name="ParticipantsList" options={{title: "Participants List"}} />
        <Stack.Screen component={UpcomingEventsFilled} name="UpcomingEventsFilled" options={{title: "Upcoming Events Filled"}} />



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

        <Stack.Screen component={ClubCoaches} name="ClubCoaches" options={{ title: "ClubCoaches" }} />
        <Stack.Screen component={IncomeState} name="IncomeState" options={{ title: "IncomeState" }} />
        <Stack.Screen component={ClubMembers} name="ClubMembers" options={{ title: "ClubMembers" }} /> 

        <Stack.Screen component={ClubMembers} name="Browse2" options={{ title: "Browse" }} />

        <Stack.Screen component={TreasurerSignIn} name="TreasurerSignIn" options={{ title: "TreasurerSignIn" }} />
        <Stack.Screen component={IncomeStatement} name="IncomeStatement" options={{ title: "IncomeStatement" }} />
        <Stack.Screen component={UnpaidDebts} name="UnpaidDebts" options={{ title: "UnpaidDebts" }} />
        <Stack.Screen component={CoachSchedules} name="CoachSchedules" options={{ title: "CoachSchedules" }} /> 

  			<Stack.Screen component={TreasurerHomeScreen} name="Home" options={{}} style={{ backgroundColor: "#E8F8D8" }}/>
				<Stack.Screen component={AddDebts} name="AddDebts" />
				<Stack.Screen component={AddProfits} name="AddProfits" />
				<Stack.Screen component={ProfitTracking} name="ProfitTracking"/>
				<Stack.Screen component={YearlyProfits} name="YearlyProfits"	/>
        <Stack.Screen component={YearlyProfitsWithData} name="YearlyProfitsWithData"	/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
