import React from "react";
import {
	ImageBackground,
	TouchableOpacity,
	Image,
	SafeAreaView,
	View,
	Text,
} from "react-native";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { styles } from "../CSS/styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TreasurerHomeScreen = () => {
	return (
		<View
			style={{
				display: "flex",
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#E8F8D8",
			}}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logoImg}
					source={require("../assets/logo.png")}
				/>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Text style={styles.text}>Welcome !</Text>
				<Text style={styles.gyb}>Glad you're back!</Text>
			</View>
			<View>
				<View style={styles.notifs}>
					<View style={styles.notificationContainer}>
						<Text style={styles.notificationText}>
							{" "}
							Notifications
						</Text>
					</View>

					<TouchableOpacity style={styles.viewAllButton}>
						<Text style={styles.viewAllText}>View all</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.notificationsContainer}>
				<TouchableOpacity style={styles.notificationButtons}>
					<View style={styles.notificationsData}>
						<Text style={styles.notificationTexts}>
							Coach list | 2 days ago
						</Text>
						<View
							style={{ backgroundColor: "#DEF1CAD8", height: 20 }}
						></View>
						<Text style={styles.notificationTexts}>
							New member added: Peter Parker
						</Text>
					</View>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: "#E8F8D8",
						height: 20,
						borderRadius: 10,
					}}
				></View>
				<TouchableOpacity style={styles.notificationButtons}>
					<View style={styles.notificationsData}>
						<Text style={styles.notificationTexts}>
							Coach list | 4 days ago
						</Text>
						<View
							style={{ backgroundColor: "#DEF1CA", height: 20 }}
						></View>
						<Text style={styles.notificationTexts}>
							New member added: Tom Riddle
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TreasurerHomeScreen;
