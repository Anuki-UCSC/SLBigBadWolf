import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as OpenAnything from "react-native-openanything";

export default function ItemPage({ route, navigation }) {
  const { itemId, name, itemdata } = route.params;
  return (
    <View>
      <Text>Item Page</Text>
      <Text>Item id: {itemId}</Text>
      <Text>name : {name}</Text>
      <Text>item.name : {itemdata.name}</Text>
      <Text>name : {itemdata.img}</Text>

      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      {/* <Button
        title="Pdf"
        onPress={() => {
          OpenAnything.Pdf("");
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
