import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	Alert,
	Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ClubMembers = () => {
	const navigation = useNavigation();

	const handleCellPress = (memberName, gender, age, level, coach) => {
		Alert.alert(
			"Member Details",
			`Name: ${memberName}\nGender: ${gender}\nAge: ${age}\nLevel: ${level}\nCoach: ${coach}`
		);
	};

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("TreasurerHomeScreen");
	};
	return (
		<View style={styles.container}>
			{/* Title */}
			<Text style={[styles.h1, styles.title]}>List of Club Members</Text>

			{/* Table of Club Members */}
			<View style={styles.table}>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"John Smith",
							"Male",
							15,
							"Advanced",
							"James"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>1. John Smith</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Jane Austin",
							"Female",
							18,
							"Advanced",
							"James"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>2. Jane Austin</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Harry Potter",
							"Male",
							12,
							"Intermediate",
							"Luke"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>3. Harry Potter</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Anakin Skywalker",
							"Male",
							17,
							"Intermediate",
							"Luke"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>4. Anakin Skywalker</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Matt Haig",
							"Male",
							16,
							"Beginner",
							"Serena"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>5. Matt Haig</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Peter Parker",
							"Male",
							10,
							"Beginner",
							"Seo"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>6. Peter Parker</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Khaled Hosseini",
							"Male",
							15,
							"Beginner",
							"Seo"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>7. Khaled Hosseini</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"R.F Kuang",
							"Male",
							12,
							"Beginner",
							"Seo"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>8. R.F Kuang</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Alex Haley",
							"Male",
							12,
							"Advanced",
							"James"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>9. Alex Haley</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Elif Shafak",
							"Female",
							20,
							"Advanced",
							"Ahmed"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>10. Elif Shafak</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Ramy Youssef",
							"Male",
							20,
							"Intermediate",
							"Luke"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>11. Ramy Youssef</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Elliot Alderson",
							"Male",
							20,
							"Advanced",
							"Ahmed"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>12. Elliot Alderson</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						handleCellPress(
							"Olivia Rodigo",
							"Female",
							21,
							"Beginner",
							"Seo"
						)
					}
					style={styles.row}
				>
					<Text style={styles.cell}>13. Olivia Rodigo</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				onPress={() => [navigation.navigate("ClubCoaches")]}
				style={styles.addButton}
			>
				<Text style={styles.buttonText}>Club Coaches</Text>
			</TouchableOpacity>

			<Text></Text>
			<Button
				onPress={navigateToTreasurerHomeScreen}
				title="Go to home page"
				color="gray"
			></Button>

			{/* Footer with icons */}
			<View style={styles.containerBtn}>
				<TouchableOpacity
					onPress={() => [navigation.navigate("IncomeState")]}
					style={styles.btn}
				>
					<Image
						source={require("../assets/nav_home.png")}
						style={styles.footerIcon}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => console.log("THE SEARCH BUTTON IS PRESSED")}
					style={styles.btn}
				>
					<Image
						source={require("../assets/Search.png")}
						style={styles.footerIcon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFB6C1",
		alignItems: "center",
		justifyContent: "flex-start", // Align items at the top
	},

	btn: {
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 150,
		margin: 50,
		width: "30%",
	},

	containerBtn: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		// paddingTop: 10,
	},

	h1: {
		fontSize: 28,
		textAlign: "center",
	},

	title: {
		position: "absolute", // Set position to absolute
		top: 20, // Set top position to 20 (adjust as needed)
		left: 0, // Set left position to 0
		right: 0, // Set right position to 0
		zIndex: 1, // Ensure title appears above other content
	},

	table: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "black",
		width: 300,
		marginTop: 80, // Adjust the marginTop of the table
	},

	row: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "black",
	},

	cell: {
		flex: 1,
		padding: 10,
	},

	addButton: {
		// position: 'absolute',
		bottom: -10,
		right: -78,
		backgroundColor: "grey",
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},

	footer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#ffc0cb",
		paddingHorizontal: 30,
		paddingVertical: 10,
		width: "100%",
		marginTop: 40,
	},

	footerIcon: {
		// paddingLeft: 20,
	},
});

export default ClubMembers;
