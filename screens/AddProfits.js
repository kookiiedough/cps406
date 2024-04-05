import React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../CSS/styles";
import { BlurView } from "@react-native-community/blur";
import TreasurerHomeScreen from "../screens/TreasurerHomeScreen";
import DropdownMonth from "../components/DropdownMonth";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YearlyProfits from "./YearlyProfits";

const AddProfits = () => {
	return (
		<View>
			<YearlyProfits />

			<View
				style={{
					display: "flex",
					alignItems: "center",
					bottom: 350,
				}}
			>
				<View
					style={{
						display: "flex",
						backgroundColor: "#fff",
						flexDirection: "column",
						justifyContent: "space-between",
						alignContent: "center",
						width: "90%",
						paddingTop: 10,
						borderRadius: 10,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ marginLeft: "7%", fontSize: 16 }}>
							Add:
						</Text>
						<TouchableOpacity style={styles.submitButton}>
							<Text style={styles.submitText}>Submit!</Text>
						</TouchableOpacity>
					</View>

					<DropdownMonth />
				</View>
			</View>
		</View>
	);
};

export default AddProfits;
