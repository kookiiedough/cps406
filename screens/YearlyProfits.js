import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Table from "../components/Table";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../components/NavigationBar";
import MenuOptions from "../components/MenuOptions";
import Footer from "../components/Footer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

function YearlyProfits() {
	const [year, setMyYear] = useState("2024");

	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navigation = useNavigation();

	const navigateToAddProfits = () => {
		navigation.navigate("AddProfits");
	};

	//function to display selected year and selected year's profits

	return (
		<View
			style={{
				display: "flex",
				flex: 1,
				backgroundColor: "#E8F8D8",
				justifyContent: "space-evenly",
			}}
		>
			<NavigationBar openMenu={openMenu} />
			<MenuOptions visible={menuOpen} closeMenu={closeMenu} />

			<ScrollView>
				<View>
					<TouchableOpacity
						style={{
							top: "80%",
							left: "70%",
							backgroundColor: "#C6DCB0",
							paddingVertical: "3%,
							borderRadius: 10,
							paddingHorizontal: "5%,
							width: "25%",
						}}
						onPress={navigateToAddProfits}
					>
						<Text>Add: </Text>
					</TouchableOpacity>
				</View>
				<View style={{ left: "5%" }}>
					<Text style={{ fontSize: 23 }}>
						Total profits for: {year}
					</Text>
				</View>

				<Table />
			</ScrollView>
			<Footer />
		</View>
	);
}

export default YearlyProfits;
