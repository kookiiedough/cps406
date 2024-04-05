import React from "react";
import { styles } from "../CSS/styles";
import { View, Text, TouchableOpacity } from "react-native";
import DropdownYear from "../components/DropdownYear";
import { useNavigation } from "@react-navigation/native";
import MenuOptions from "../components/MenuOptions";
import NavigationBar from "../components/NavigationBar";

const ProfitTracking = () => {
	const navigation = useNavigation();

	const navigateToYearlyProfits = () => {
		navigation.navigate("YearlyProfits");
	};
	return (
		<View style={{ backgroundColor: "#E8F8D8", display: "flex", flex: 1 }}>
			<View
				style={{
					display: "flex",
					top: 20,
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 0,
					}}
				>
					<Text style={styles.headerProfitsPage}>
						Profit Tracking
					</Text>
					<TouchableOpacity
						style={styles.submitButton}
						onPress={navigateToYearlyProfits}
					>
						<Text style={styles.submitText}>Submit!</Text>
					</TouchableOpacity>
				</View>
				<View style={{ backgroundColor: "#E8F8D8", height: 20 }}></View>
				<Text style={styles.header2ProfitsPage}>
					Select the year you would like to generate a profits list
					for.
				</Text>
				<DropdownYear />
				<View style={{ display: "flex", height: 20 }}></View>
			</View>
			<View style={{}}>
				<Text style={styles.headerProfitsPage}>Existing Lists:</Text>
				<View
					style={{
						display: "flex",
						width: "100%",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity style={styles.profitsListButtons}>
						<View
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "flex-start",
							}}
						>
							<Text style={{ left: 10 }}> 2023 | 12 items</Text>
							<View
								style={{
									backgroundColor: "#DEF1CA",
									height: 10,
								}}
							></View>
							<Text style={{ left: 10 }}>
								{" "}
								Last accessed: 01/12/2024{" "}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.profitsListButtons}>
						<Text style={{ left: 10 }}> 2023 | 12 items</Text>
						<View
							style={{ backgroundColor: "#DEF1CA", height: 10 }}
						></View>
						<Text style={{ left: 10 }}>
							{" "}
							Last accessed: 12/21/2022{" "}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ProfitTracking;
