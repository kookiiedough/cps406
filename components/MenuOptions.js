import { useState } from "react";
import React from "react";
import {
	TouchableOpacity,
	State,
	Button,
	View,
	Text,
	StyleSheet,
} from "react-native";
import { styles } from "../CSS/styles";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TreasurerHomeScreen from "../screens/TreasurerHomeScreen";
import YearlyProfits from "../screens/YearlyProfits";
import ProfitTracking from "../screens/ProfitTracking";
import AddDebts from "../screens/AddDebts";
import AddProfits from "../screens/AddProfits";

const MenuOptions = (props) => {
	const navigation = useNavigation();

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("Home");
	};

	const navigateToYearlyProfits = () => {
		navigation.navigate("YearlyProfits");
	};

	const navigateToProfitTracking = () => {
		navigation.navigate("ProfitTracking");
	};

	const navigateToAddProfits = () => {
		navigation.navigate("AddProfits");
	};

	const navigateToAddDebts = () => {
		navigation.navigate("AddDebts");
	};

	return (
		<View
			style={
				props.visible
					? {
							display: "flex",
							height: "100%",
							width: "100%",
							position: "absolute",
							zIndex: "10",
							top: 0,
							left: 0,
					  }
					: { display: "none" }
			}
		>
			<View
				style={{
					backgroundColor: "white",
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TouchableOpacity style={{}}>
					<Text style={styles.menuItem}>Income Statements</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}} onPress={navigateToProfitTracking}>
					<Text style={styles.menuItem}>Profit tracking</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}}>
					<Text style={styles.menuItem}>Debts</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}}>
					<Text style={styles.menuItem}>Coach list</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}}>
					<Text style={styles.menuItem}>Members</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.closeMenu()}>
					<Text
						style={{
							fontSize: 25,
							marginVertical: 15,
							color: "#BECFAC",
							fontWeight: "bold",
						}}
					>
						X
					</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity> */}
			</View>
		</View>
	);
};

export default MenuOptions;
