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

const IncomeState = () => {
	const navigation = useNavigation();

    const handleCellPress2 = () => {
        Alert.prompt(
          "Enter Revenue and Expenses",
          null,
          [
            {
              text: "Submit",
              onPress: (input) => {
                const [revenue, expenses] = input.split(',');
                console.log("Revenue:", revenue.trim());
                console.log("Expenses:", expenses.trim());
              }
            },
            {
              text: "Cancel",
              onPress: () => console.log("Canceled"),
              style: "cancel"
            }
          ],
          "plain-text",
          ','
        );
      };

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("TreasurerHomeScreen");
	};
	return (
		<View style={styles.container}>
			{/* Title */}
			<Text>
				{"\n"}
				<Text style={[styles.h2, styles.title]}>
					Income Statement For:
				</Text>
				{"\n"}
				<Text style={[styles.h1, styles.title]}>03/2024</Text>
			</Text>

			{/* Table of Club Members */}
			<View style={styles.table}>
				<View style={styles.row}>
					<Text style={styles.cell}>TENNIS AT THE MET</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>INCOME STATEMENT</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>
						PENDING ENDING MARCH 31, 2024
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}> </Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>REVENUE </Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Members Payment $ XXXX.XX</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Accounts payable XXXX.XX</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>TOTAL REVENUES XXXX.XX</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}></Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Operating Expenses </Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Hall Expenses XXXX.XX</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>
						Total operating Expenses XXXX.XX
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}></Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>
						Profit before income tax XXXX.XX
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Income tax XX.XX</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>Profit XXXX.XX</Text>
				</View>
			</View>

            {/* i just added a button that takes input you can remove it if you prefer this one */}
			{/* <TouchableOpacity
				onPress={() => console.log("Adding Expenses or Revenue")}
				style={styles.addButton}
			>
				<Text style={styles.buttonText}>+ Add</Text>
			</TouchableOpacity> */}

			<Text></Text>
			<Button
				onPress={navigateToTreasurerHomeScreen}
				title="Go to home page"
				color="#DE5D83"
			></Button>

            <TouchableOpacity 
                    onPress={handleCellPress2} 
                    style={styles.addButton}
            >
                    <Text style={styles.buttonText}>+ Add</Text>
            </TouchableOpacity>

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
		fontSize: 20,
		textAlign: "center",
	},

	h2: {
		fontSize: 20,
		// textAlign: "center",
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
		marginTop: 15, // Adjust the marginTop of the table
	},

	row: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "black",
	},

	cell: {
		flex: 1,
		padding: 7,
		textAlign: "center",
	},

	addButton: {
		// position: 'absolute',
		bottom: -10,
		right: 110,
		backgroundColor: "green",
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
		backgroundColor: "#DE5D83",
		paddingHorizontal: 30,
		paddingVertical: 10,
		width: "100%",
		marginTop: 40,
	},

	footerIcon: {
		// paddingLeft: 20,
	},
});

export default IncomeState;
