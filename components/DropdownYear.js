import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "../CSS/styles";

const DropdownYear = () => {
	const [selectedV, setSelectedV] = useState(null);

	const placeholder = {
		label: "Select: Year",
		value: null,
	};

	const placeHolderStyle = () => {
		return <Text style={styles.label}>{placeholder.label}</Text>;
	};

	const options = [
		{ label: "2024", value: "2024" },
		{ label: "2023", value: "2023" },
		{ label: "2022", value: "2022" },
		{ label: "2021", value: "2021" },
		{ label: "2020", value: "2020" },
		{ label: "2019", value: "2019" },
		{ label: "2018", value: "2018" },
		{ label: "2017", value: "2017" },
		{ label: "2016", value: "2016" },
		{ label: "2015", value: "2015" },
		{ label: "Other...", value: "option11" },
	];

	return (
		<View style={{}}>
			<View
				style={{
					display: "flex",
					marginLeft: "7%",
					flexDirection: "column",
					alignItems: "flex-start",
					marginBottom: "10%,
				}}
			>
				<View
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<View>
						<Text style={{ fontSize: 16 }}>Select an option:</Text>
						<Text></Text>
					</View>
					<View
						style={{
							display: "flex",
							alignItems: "flex-end",
						}}
					></View>
				</View>
				<RNPickerSelect
					placeholder={placeholder}
					items={options}
					onValueChange={(value) => setSelectedV(value)}
					value={selectedV}
				/>

				{/* {selectedV && (
					<Text style={styles.label}>
						<Text></Text>Selected: {selectedV}
					</Text>
				)} */}
			</View>
		</View>
	);
};

export default DropdownYear;
