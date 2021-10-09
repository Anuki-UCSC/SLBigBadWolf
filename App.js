// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import HomeScreen from "./src/pages/HomeScreen";
import InsertBookScreen from "./src/pages/InsertBookScreen";
import ItemPage from "./src/pages/ItemPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen2() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Insert Book" component={InsertBookScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="Item" component={ItemPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 25,
    // justifyContent: "center",
  },
  boxbook: {
    backgroundColor: "red",
    width: 180,
    margin: 8,
  },
  texttopic: {
    color: "white",
    fontSize: 24,
  },
  imgcover: {
    width: 180,
    height: 240,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff0000",
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
