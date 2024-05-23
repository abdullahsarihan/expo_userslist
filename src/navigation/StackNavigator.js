//src/navigation/StackNavigator.js
import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import HomeScreen from "../screens/Home";
import UsersScreen from "../screens/Users";
import UserDetail from "../screens/UsersDetail";
import DrawerButton from "../components/DrawerButton";

//Home Stack
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerLeft: () => <DrawerButton />,

          //   (
          // <Button
          //   title="Open Drawer"
          //   onPress={() => navigation.toggleDrawer()}
          // //   onPress={() => navigation.openDrawer()}
          // />
          //   ),
        })}
      />
    </HomeStack.Navigator>
  );
}

//Settings Stack
const UsersStack = createNativeStackNavigator();

function USersStackNavigator() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}

export { HomeStackNavigator, USersStackNavigator };
