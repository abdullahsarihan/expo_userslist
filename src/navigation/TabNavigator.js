//src/navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HomeStackNavigator, USersStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "HomeTab") {
          iconName = "home-outline";
        } else if (route.name === "UsersTab") {
          iconName = "people-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{ title: "Home" }}
    />
    <Tab.Screen
      name="UsersTab"
      component={USersStackNavigator}
      options={{ tabBarBadge: 3, title: "Users" }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
