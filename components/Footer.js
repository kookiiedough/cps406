import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
} from "react-native";
import { styles } from "../CSS/styles";

function Footer(props) {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#E8F8D8",
			}}
		>
			<TouchableOpacity style={styles.messageContainer}>
				<Image
					style={styles.messageImg}
					source={require("../assets/three-dots.png")}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity style={styles.searchBarContainer}>
				<Image
					style={styles.searchBarImg}
					source={require("../assets/searching-bar.png")}
				></Image>
			</TouchableOpacity>
		</View>
	);
}

export default Footer;
