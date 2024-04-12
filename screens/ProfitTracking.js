import { React, useState } from "react";
import { styles } from "../CSS/styles";
import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import DropdownYear from "../components/DropdownYear";
import { useNavigation } from "@react-navigation/native";
import MenuOptions from "../components/MenuOptions";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const ProfitTracking = () => {
	const navigation = useNavigation();

	const navigateToYearlyProfits = () => {
		navigation.navigate("YearlyProfits");
	};

	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<View style={{ backgroundColor: "#FFB6C1", display: "flex", flex: 1 }}>
			<NavigationBar openMenu={openMenu} />
			<MenuOptions visible={menuOpen} closeMenu={closeMenu} />
			<ScrollView style={{ display: "flex", flex: 1 }}>
				<View
					style={{
						display: "flex",
						top: "5%",
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
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

					<Text style={styles.header2ProfitsPage}>
						Select year to generate profits list.
					</Text>
					<DropdownYear />
					<View style={{ display: "flex", height: "10%" }}></View>
				</View>
				<View style={{}}>
					<Text style={styles.headerProfitsPage}>
						Existing Lists:
					</Text>
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
								<Text style={{ left: "5%" }}>
									{" "}
									2023 | 12 items
								</Text>
								<View
									style={{
										backgroundColor: "#FFB6C1",
										height: "5%",
									}}
								></View>
								<Text style={{ left: "5%" }}>
									{" "}
									Last accessed: 01/12/2024{" "}
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.profitsListButtons}>
							<Text style={{ left: "5%" }}> 2023 | 12 items</Text>
							<View
								style={{
									backgroundColor: "#FFB6C1",
									height: "5%",
								}}
							></View>
							<Text style={{ left: "5%" }}>
								{" "}
								Last accessed: 12/21/2022{" "}
							</Text>
						</TouchableOpacity>
					</View>
					<Button title="View all" color="gray"></Button>
				</View>
			</ScrollView>

			<Footer />
		</View>
	);
};

export default ProfitTracking;
