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

import HomeScreen from "./src/pages/HomeScreen";
import ItemScreen from "./src/pages/ItemScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import EditProfileScreen from "./src/pages/EditProfileScreen";
import MyLibrary from "./src/pages/MyLibrary";
import SignInScreen from "./src/pages/SignInScreen";
import SignUpScreen from "./src/pages/SignUpScreen";

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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#DE5555",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "My Profile" }}
        />
        <Stack.Screen
          name="sign up"
          component={SignUpScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "SLBigBadWolf" }}
        />

        <Stack.Screen name="My Library" component={MyLibrary} />
        <Stack.Screen
          name="sign in"
          component={SignInScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen name="Home_A" component={HomeScreen_A} />
        <Stack.Screen name="Insert Book_A" component={InsertBookScreen_A} />
        <Stack.Screen name="Home2_A" component={HomeScreen2} />
        <Stack.Screen name="Item_A" component={ItemPage_A} />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
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
