import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListHeader = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgreen",
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e3e3e3",
    alignItems: "center",
  },
});

export default ListHeader;
