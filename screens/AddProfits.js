import { React, useState } from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "../CSS/styles";
import DropdownMonth from "../components/DropdownMonth";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import MenuOptions from "../components/MenuOptions";

const AddProfits = () => {
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
				flex: 1,
				justifyContent: "space-evenly",
				backgroundColor: "#E8F8D8",
			}}
		>
			<NavigationBar openMenu={openMenu} />

			<MenuOptions visible={menuOpen} closeMenu={closeMenu} />

			<ScrollView style={{ top: "25%" }}>
				<View
					style={{
						display: "flex",
						alignItems: "center",
						alignContent: "center",
					}}
				>
					<View
						style={{
							display: "flex",
							backgroundColor: "#fff",
							justifyContent: "space-between",
							alignContent: "center",
							width: "90%",
							paddingTop: "5%",
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

				<View style={{ height: "7%" }}></View>
			</ScrollView>

			<Footer />
		</View>
	);
};

export default AddProfits;
