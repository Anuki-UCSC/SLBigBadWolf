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
import HomeScreen_A from "./src/pages/HomeScreen_A";
import InsertBookScreen_A from "./src/pages/InsertBookScreen_A";
import ItemPage_A from "./src/pages/ItemPage_A";
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
        <Stack.Screen name="Home_A" component={HomeScreen_A} />
        <Stack.Screen name="Insert Book_A" component={InsertBookScreen_A} />
        <Stack.Screen name="Home2_A" component={HomeScreen2} />
        <Stack.Screen name="Item_A" component={ItemPage_A} />
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
