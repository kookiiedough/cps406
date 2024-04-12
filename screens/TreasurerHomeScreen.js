import { React, useState } from "react";
import {
	TouchableOpacity,
	Image,
	View,
	Text,
	ScrollView,
	Button,
} from "react-native";
import MenuOptions from "../components/MenuOptions";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { styles } from "../CSS/styles";

const TreasurerHomeScreen = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<View
			style={{
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#FFB6C1",
				flex: 1,
				zIndex: 1,
			}}
		>
			<NavigationBar openMenu={openMenu} />
			<MenuOptions visible={menuOpen} closeMenu={closeMenu} />
			<ScrollView>
				<View style={{ top: "10%" }}>
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
							position: "relative",
							top: "15%",
						}}
					>
						<Text style={styles.text}>Welcome !</Text>
						<Text style={styles.gyb}>Glad you're back!</Text>
					</View>
				</View>

				<View style={styles.notificationContainer}>
					<Text style={styles.notificationText}> Notifications</Text>
					<Button
						style={styles.viewAllButton}
						title="View all "
						color="gray"
					></Button>
				</View>

				<View style={styles.notificationsContainer}>
					<TouchableOpacity style={styles.notificationButtons}>
						<View style={styles.notificationsData}>
							<Text style={styles.notificationTexts}>
								Coach list | 2 days ago
							</Text>
							<View
								style={{
									backgroundColor: "#FFA6C9",
									height: "10%",
								}}
							></View>
							<Text style={styles.notificationTexts}>
								New member added: Peter Parker
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.notificationButtons}>
						<View style={styles.notificationsData}>
							<Text style={styles.notificationTexts}>
								Coach list | 4 days ago
							</Text>
							<View
								style={{
									backgroundColor: "#DE5D83",
									height: "10%",
								}}
							></View>
							<Text style={styles.notificationTexts}>
								New member added: Tom Riddle
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<Footer />
		</View>
	);
};

export default TreasurerHomeScreen;
