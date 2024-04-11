import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "../CSS/styles";
import MenuOptions from "./MenuOptions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

function NavigationBar(props) {
	const navigation = useNavigation();

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("TreasurerHomeScreen");
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
				height: "15%",
			}}
		>
			<TouchableOpacity
				onPress={navigateToTreasurerHomeScreen}
				title={"Pink Vanguard Club"}
				style={styles.logo}
			>
				<View>
					<Image
						title={"Pink Vanguard Club"}
						style={styles.logoImg}
						source={require("../assets/logo.png")}
					></Image>
					<Text style={styles.appName}>Pink Vanguard Club</Text>
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
