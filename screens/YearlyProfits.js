import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Table from "../components/Table";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../CSS/styles";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

function YearlyProfits() {
	const [year, setMyYear] = useState("2024");

	const navigation = useNavigation();

	const navigateToAddProfits = () => {
		navigation.navigate("AddProfits");
	};

	//function to display selected year and selected year's profits

	return (
		<View
			style={{
				display: "flex",
				alignItems: "flex-start",
				backgroundColor: "#E8F8D8",
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					top: 60,
					position: "absolute",
					alignItems: "space-evenly",
				}}
			>
				<View style={{ marginLeft: 20 }}>
					<Text style={{ bottom: 50, fontSize: 23 }}>
						Total profits for: {year}
					</Text>
				</View>
				<View>
					<TouchableOpacity
						style={{
							bottom: 45,
							left: 120,
							backgroundColor: "#C6DCB0",
							paddingVertical: 10,
							borderRadius: 10,
							paddingHorizontal: 10,
						}}
						onPress={navigateToAddProfits}
					>
						<Text>Add: </Text>
					</TouchableOpacity>
				</View>
			</View>

			<Table />
		</View>
	);
}

export default YearlyProfits;
