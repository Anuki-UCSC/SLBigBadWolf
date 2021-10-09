import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import uniqueRandom from "unique-random";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function InsertBookScreen() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [offer, setOffer] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const uniqueRandomid = uniqueRandom(1, 10000);

  const onPressSubmitform = () => {
    // const id = uuidv4();
    const id = uniqueRandomid();
    const data = {
      name: name,
      author: author,
      img: img,
      offer: offer,
      price: price,
      rating: rating,
      id: id,
    };
    console.log("Submitted", data);

    axios
      .put(
        `https://reacttaskmanager-6968e-default-rtdb.firebaseio.com/bookdata/${id}.json`,
        data
      )
      .then((res) => {
        console.log("resss", res);
        setName("");
        setAuthor("");
        setImg("");
        setOffer("");
        setPrice("");
        setRating("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Text style={styles.topic}>Insert Book Screen</Text>
      <View style={styles.formbody}>
        <View>
          <Text style={styles.textinputlabel}>Name</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setName}
              value={name}
              placeholder="Book name"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textinputlabel}>Author</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setAuthor}
              value={author}
              placeholder="Author"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textinputlabel}>Image</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setImg}
              value={img}
              placeholder="Image url"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textinputlabel}>Price</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setPrice}
              value={price}
              placeholder="Price"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textinputlabel}>Rating</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setRating}
              value={rating}
              placeholder="Rating"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textinputlabel}>Offer</Text>
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={setOffer}
              value={offer}
              placeholder="Offer"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.Buttondiv}>
          <Button onPress={onPressSubmitform} title="Sumbit" color="#841584" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topic: {
    color: "#ff0000",
    fontSize: 20,
  },
  formbody: {
    width: "80%",
    // backgroundColor: "yellow",
  },
  textinput: {
    // backgroundColor: "green",
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  textinputlabel: {
    paddingTop: 15,
    // paddingBottom: 5,
    fontWeight: "bold",
  },
  Buttondiv: {
    marginTop: 30,
  },
});
