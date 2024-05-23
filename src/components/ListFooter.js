import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListFooter = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "aqua",
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e3e3e3",
    alignItems: "center",
  },
});

export default ListFooter;
