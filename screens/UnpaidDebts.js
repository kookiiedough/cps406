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
import Dialog from "react-native-dialog";

const data = [
	{ label: "AMOUNT", value: "1" },
	{ label: "DATE", value: "2" },
];

const UnpaidDebts = () => {
	const [titleText, setTitleText] = useState("Unpaid Debts ");
	const bodyText =
		"A list of the payments are waiting to be paid. Sort them based on the greatest amount you owe to the least, or the longest date over due to the most recent overdue payment. \n\n\nWhen you are ready, make a payment!";

	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);

	const [visible, setVisible] = useState(false);

	const navigation = useNavigation();

	const navigateToTreasurerHomeScreen = () => {
		navigation.navigate("TreasurerHomeScreen");
	};

	const showDialog = () => {
		setVisible(true);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	const handleDelete = () => {
		// The user has pressed the "Delete" button, so here you can do your own logic.
		// ...Your logic
		setVisible(false);
	};
	const renderLabel = () => {
		if (value == 1) {
			return (
				<Image
					style={styles.amount}
					source={require("../assets/amount.png")}
					resizeMode="contain"
				/>
			);
		} else if (value == 2) {
			return (
				<Image
					style={styles.date}
					source={require("../assets/date.png")}
					resizeMode="contain"
				/>
			);
		}
		return null;
	};

	return (
		<View style={styles.container}>
			<Text style={styles.baseText}>
				<Text style={styles.titleText}>
					{titleText}
					{"\n"}
					{"\n"}
				</Text>
				<Text numberOfLines={5}>{bodyText}</Text>
			</Text>

			<TouchableOpacity
				style={{
					backgroundColor: " #FFB6C1",
					top: "0%",
					right: "25%",
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
					onPress={() => [navigation.navigate("IncomeStatement")]}
					style={styles.btn}
				>
					<Image
						source={require("../assets/Search.png")}
						style={styles.footerIcon2}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>

			{/* How to Order Tables */}

			<Dropdown
				style={[styles.dropdown, isFocus && { borderColor: "green" }]}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={data}
				search
				maxHeight={100}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? "  SORT BY" : "..."}
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

			{/* sort */}

			{renderLabel()}

			{/* Make a payment */}
			<View style={styles.button}>
				<Button
					title="Make a Payment Now!"
					onPress={showDialog}
					color={"#557B2F"}
				/>
				<Dialog.Container visible={visible}>
					<Dialog.Title>Make a Payment</Dialog.Title>
					<Dialog.Input>Name of Account:</Dialog.Input>
					<Dialog.Input>Enter an Amount: $</Dialog.Input>
					<Dialog.Button label="Cancel" onPress={handleCancel} />
					<Dialog.Button label="Confirm" onPress={handleDelete} />
				</Dialog.Container>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFB6C1",
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
	rectangle: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		width: 400,
		height: 100,
		backgroundColor: "#FF91A4",
		opacity: 0.8,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "#F4C2C2",
		paddingHorizontal: 20,
		paddingVertical: 10, // Adjust this value to change the height of the footer
		width: "100%",
		marginTop: 20, // Adjust this value to control the distance from the content above
		bottom: 0,
		position: "absolute",
	},
	footerIcon: {
		paddingBottom: 0,
		position: "absolute",
		width: 70,
		height: 100,
		left: 35,
		marginTop: 150,
	},
	footerIcon2: {
		paddingBottom: 0,
		position: "absolute",
		width: 200,
		height: 150,
		marginTop: 122,
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
		height: 60,
		bottom: 316,
		left: 15,
		width: 150,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		position: "absolute",
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
		width: 10,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
	amount: {
		width: 350,
		height: 400,
		bottom: 20,
		position: "absolute",
	},
	date: {
		width: 350,
		height: 400,
		bottom: 20,
		position: "absolute",
	},
	button: {
		position: "absolute",
		top: 325, // Adjust as needed
		right: 25, // Adjust as needed
		width: 150,
	},
});

export default UnpaidDebts;
