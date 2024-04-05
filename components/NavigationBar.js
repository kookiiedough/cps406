import React, { useState } from "react";
import {
	TouchableOpacity,
	View,
	Text,
	Image,
	StyleSheet,
	State,
} from "react-native";
import { styles } from "../CSS/styles";
import MenuOptions from "./MenuOptions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import TreasurerHomeScreen from "../screens/TreasurerHomeScreen";
import { NavigationContainer } from "@react-navigation/native";

function NavigationBar(props) {
	const navigation = useNavigation();

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("Home");
	};

	const handleHamburgerMenuButtonPress = () => {
		props.openMenu();
	};

	return (
		<SafeAreaView
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#CEE4B9",
			}}
		>
			<TouchableOpacity
				onPress={navigateToTreasurerHomeScreen}
				title={"CLUB CENTS"}
				style={styles.logo}
			>
				<View>
					<Image
						title={"CLUB CENTS"}
						style={styles.logoImg}
						source={require("../assets/logo.png")}
					></Image>
					<Text style={styles.appName}>Club Cents</Text>
				</View>
			</TouchableOpacity>

			{/* Hamburger Menu */}
			<TouchableOpacity
				onPress={handleHamburgerMenuButtonPress}
				style={styles.hamburger}
			>
				<Image
					style={styles.hamburgerImg}
					source={require("../assets/hamburger.png")}
				></Image>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default NavigationBar;
