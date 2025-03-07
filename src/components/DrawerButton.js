//src/components/DrawerButton.js
import { TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DrawerButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Ionicons name={"menu"} size={28} color={"#000"} />
    </TouchableOpacity>
  );
};

export default DrawerButton;
