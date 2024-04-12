import { useState } from "react";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../CSS/styles";
import { useNavigation } from "@react-navigation/native";

const MenuOptions = (props) => {
	const navigation = useNavigation();

	const navigateToProfitTracking = () => {
		navigation.navigate("ProfitTracking");
	};

	const navigateToIncomeStatements = () => {
		navigation.navigate("IncomeStatement");
	};

	const navigateToUnpaidDebts = () => {
		navigation.navigate("UnpaidDebts");
	};

	const navigateToClubCoaches = () => {
		navigation.navigate("ClubCoaches");
	};

	const navigateToClubMembers = () => {
		navigation.navigate("ClubMembers");
	};

    const navigateToCoachSchedules = () => {
        navigation.navigate("CoachSchedules")
    }

	return (
		<View
			style={
				props.visible
					? {
							display: "flex",
							height: "100%",
							width: "100%",
							position: "absolute",
							zIndex: "10",
					  }
					: { display: "none" }
			}
		>
			<View
				style={{
					backgroundColor: "#FFB6C1",
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TouchableOpacity style={{}}>
					<Text
						style={styles.menuItem}
						onPress={navigateToIncomeStatements}
					>
						Income Statements
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}} onPress={navigateToProfitTracking}>
					<Text style={styles.menuItem}>Profit tracking</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}} onPress={navigateToUnpaidDebts}>
					<Text style={styles.menuItem}>Debts</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}}>
					<Text
						style={styles.menuItem}
						onPress={navigateToClubCoaches}
					>
						Coach list
					</Text>
				</TouchableOpacity>
                <TouchableOpacity style={{}}>
					<Text
						style={styles.menuItem}
						onPress={navigateToCoachSchedules}
					>
						Schedule
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{}} onPress={navigateToClubMembers}>
					<Text style={styles.menuItem}>Members</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.closeMenu()}>
					<Text
						style={{
							fontSize: 25,
							marginVertical: "5%",
							color: "#BECFAC",
							fontWeight: "bold",
						}}
					>
						X
					</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity> */}
			</View>
		</View>
	);
};

export default MenuOptions;
