//Users/index.js
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Item from "./item";
import axios from "axios";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/usersf")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading text="Loading..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item id={item.id} name={item.name} />}
      />
    </View>
  );
};

export default UsersScreen;
