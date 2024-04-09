import { useState, React } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "../CSS/styles";

const AddDebts = () => {
	const [input, setInput] = useState("");
	const [dollarInput, setDollarInput] = useState("");
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
				alignItems: "center",
			}}
		>
			<NavigationBar openMenu={openMenu} />
			<MenuOptions visible={menuOpen} closeMenu={closeMenu} />

			<ScrollView>
				<View
					style={{
						display: "flex",
						backgroundColor: "#BECFAC",
						flexDirection: "column",
						justifyContent: "space-between",
						alignContent: "center",
						width: "90%",
						paddingTop: 10,
						borderRadius: 10,
						paddingVertical: 10,
					}}
				>
					<Text style={{ marginLeft: "7%", fontSize: 24 }}>
						Make a payment
					</Text>

					<Text
						style={{
							marginLeft: "7%",
							fontSize: 16,
							marginVertical: 10,
							marginTop: 20,
						}}
					>
						Name of Debt:{" "}
					</Text>
					<View style={{ padding: 10, alignItems: "center" }}>
						<TextInput
							style={{
								height: 40,
								backgroundColor: "#fff",
								borderRadius: 10,
								width: "90%",
							}}
							placeholder="Type something here..."
							onChangeText={(newInput) => setInput(newInput)}
							defaultValue={input}
						/>

						{/* <Text style={{ padding: 10, fontSize: 16 }}>
            {input
              .split(" ")
              .map((word) => word)
              .join(" ")}
          </Text> */}
					</View>

					<Text
						style={{
							marginLeft: "7%",
							fontSize: 16,
							marginVertical: 10,
							marginTop: 20,
						}}
					>
						Amount ($):{" "}
					</Text>
					<View style={{ padding: 10, alignItems: "center" }}>
						<TextInput
							style={{
								height: 40,
								backgroundColor: "#fff",
								borderRadius: 10,
								width: "90%",
							}}
							placeholder="Type something here..."
							onChangeText={(newInput) =>
								setDollarInput(newInput)
							}
							defaultValue={dollarInput}
						/>

						{/* <Text style={{ padding: 10, fontSize: 16 }}>
            {input
              .split(" ")
              .map((word) => word)
              .join(" ")}
          </Text> */}
					</View>

					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
							paddingVertical: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: "red",
								marginRight: 30,
								paddingTop: 10,
								paddingBottom: 10,
								paddingHorizontal: 10,
								borderRadius: 10,
							}}
						>
							<Text style={styles.submitText}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.submitButton}>
							<Text style={styles.submitText}>Submit!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			<Footer />
		</View>
	);
};

export default AddDebts;
