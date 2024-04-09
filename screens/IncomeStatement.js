import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableHighlight,
	Image,
	TouchableOpacity,
	ImageBackground,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import MenuOptions from "../components/MenuOptions";

const data = [
	{ label: "April 2024", value: "1" },
	{ label: "March 2024", value: "2" },
	{ label: "February 2024", value: "3" },
	{ label: "January 2024", value: "4" },
	{ label: "December 2023", value: "5" },
	{ label: "November 2023", value: "6" },
	{ label: "October 2023", value: "7" },
	{ label: "September 2023", value: "8" },
	{ label: "August 2023", value: "9" },
	{ label: "July 2023", value: "10" },
	{ label: "June 2023", value: "11" },
	{ label: "May 2023", value: "12" },
];

const IncomeStatement = () => {
	const [titleText, setTitleText] = useState("Income Statement ");
	const bodyText =
		"Revenue and expenses data are updated every 2 business days. Income statements are finalized on the last business day of each month. \n\n\nTo View an Income Statement: \n\n\n\n\n\n\n\n\n\n\n\n\nIt is recommended to view the revenue and expenses information before adding data to the income statement. ";

	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);

	const navigation = useNavigation();

	const renderLabel = () => {
		if (value == 2) {
			return navigation.navigate("IncomeState");
		}
		return null;
	};

	const [menuOpen, setMenuOpen] = useState(false);

	const handleHamburgerMenuButtonPress = () => {
		props.openMenu();
	};

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("TreasurerHomeScreen");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.baseText}>
				<MenuOptions visible={menuOpen} closeMenu={closeMenu} />
				<Text style={styles.titleText}>
					{titleText}
					{"\n"}
					{"\n"}
				</Text>
				<Text numberOfLines={5}>{bodyText}</Text>
			</Text>

			{renderLabel()}

			{/* Footer with icons */}

			<View style={styles.containerBtn}>
				<TouchableOpacity
					onPress={() => [navigation.navigate("CoachSchedule")]}
					style={styles.btn}
				>
					<Image
						source={require("../assets/nav_home.png")}
						style={styles.footerIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => [navigation.navigate("UnpaidDebts")]}
					style={styles.btn}
				>
					<Image
						source={require("../assets/Search.png")}
						style={styles.footerIcon2}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>

			{/* Month and Year*/}

			<Dropdown
				style={[styles.dropdown, isFocus && { borderColor: "green" }]}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={data}
				search
				maxHeight={170}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? "Select Month and Year" : "..."}
				searchPlaceholder="Search..."
				value={value}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={(item) => {
					setValue(item.value);
					setIsFocus(false);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.icon}
						color={isFocus ? "green" : "black"}
						name="Safety"
						size={20}
					/>
				)}
			/>

			<TouchableOpacity
				style={{
					backgroundColor: "#C6DCB0",
					bottom: "5%",
					paddingHorizontal: "5%",
					paddingVertical: "3%",
					borderRadius: 10,
				}}
				onPress={navigateToTreasurerHomeScreen}
			>
				<Text style={{ color: "#fff", fontSize: 16 }}>
					{" "}
					Go to home page
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// display: "flex",
		// flexDirection: "row",
		flex: 1,
		backgroundColor: "#E8F8D8",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	baseText: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		fontSize: 16,
		textAlign: "left",
		maxWidth: "100%",
		position: "absolute",
		top: 20,
	},
	titleText: {
		fontSize: 32,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "#C0E19E",
		paddingHorizontal: 20,
		paddingVertical: 10, // Adjust this value to change the height of the footer
		width: "100%",
		marginTop: 20, // Adjust this value to control the distance from the content above
		bottom: 50,
	},
	footerIcon: {
		paddingBottom: 0,
		position: "absolute",
		width: 70,
		height: 100,
		left: 35,
		marginTop: 180,
	},
	footerIcon2: {
		paddingBottom: 0,
		position: "absolute",
		width: 200,
		height: 150,
		bottom: -310,
	},
	containerBtn: {
		alignItems: "center",
		// display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 200,
	},
	btn: {
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 150,
		marginTop: 30,
		margin: 60,
		// padding: 20,
		width: "30%",
	},
	dropdown: {
		height: 50,
		bottom: 190,
		right: 0,
		width: 350,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},

	hamburgerIcon: {
		width: 30,
		height: 30,
		position: "absolute",
	},
});

export default IncomeStatement;
