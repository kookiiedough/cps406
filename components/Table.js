import React from "react";
import { StyleSheet, Data } from "react-native";
import { DataTable } from "react-native-paper";

const Table = () => {
	return (
		<DataTable style={{ top: "10%" }}>
			<DataTable.Header style={styles.tableHeader}>
				<DataTable.Title>Month</DataTable.Title>
				<DataTable.Title>Amount</DataTable.Title>
			</DataTable.Header>
			<DataTable.Row>
				<DataTable.Cell style={styles.nextPage}>January</DataTable.Cell>
				<DataTable.Cell></DataTable.Cell>
			</DataTable.Row>
			<DataTable.Row>
				<DataTable.Cell style={styles.nextPage}>
					February
				</DataTable.Cell>
				<DataTable.Cell></DataTable.Cell>
			</DataTable.Row>
			<DataTable.Row>
				<DataTable.Cell style={styles.nextPage}>March</DataTable.Cell>
				<DataTable.Cell></DataTable.Cell>
			</DataTable.Row>
			<DataTable.Row>
				<DataTable.Cell style={styles.nextPage}>April</DataTable.Cell>
				<DataTable.Cell></DataTable.Cell>
			</DataTable.Row>
			<DataTable.Row>
				<DataTable.Cell style={styles.nextPage}>May</DataTable.Cell>
				<DataTable.Cell></DataTable.Cell>
			</DataTable.Row>
		</DataTable>
	);
};

export default Table;

const styles = StyleSheet.create({
	tableHeader: {
		backgroundColor: "#C6DCB0",
	},
	nextPage: {
		// backgroundColor: "#F3FDE9",
		// borderRadius: 7,
		paddingBottom: 10,
	},
});
