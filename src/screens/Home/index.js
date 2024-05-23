//Home/index.js
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Text>Home Screen</Text>
      <Button
        title="Kullanıcılar"
        onPress={() => navigation.navigate("UsersTab")}
      />

      {/* <Button title="Users" onPress={() => navigation.push("Users")} /> */}
    </View>
  );
}

export default HomeScreen;
