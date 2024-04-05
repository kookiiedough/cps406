import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "../CSS/styles";

const DropdownMonth = () => {
	const [selectedV, setSelectedV] = useState(null);

	const placeholder = {
		label: "Select: Month",
		value: null,
	};

	const options = [
		{ label: "January", value: "January" },
		{ label: "February", value: "February" },
		{ label: "March", value: "March" },
		{ label: "April", value: "April" },
		{ label: "May", value: "May" },
		{ label: "June", value: "June" },
		{ label: "July", value: "July" },
		{ label: "August", value: "August" },
		{ label: "September", value: "September" },
		{ label: "October", value: "October" },
		{ label: "November", value: "November" },
		{ label: "December", value: "December" },
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
			</View>
		</View>
	);
};

export default DropdownMonth;
