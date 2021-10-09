import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Seven Petles",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 2,
      name: "Ivan and other stories",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 3,
      name: "Alibaba and 40 theives",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    { id: 4, name: "Tottachan", img: "../../assets/images/alibaba_and40.jpg" },
    {
      id: 5,
      name: "Chicken Soup Souls",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 6,
      name: "Harry Potter",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 7,
      name: "Lord of the Rings",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 8,
      name: "Seven Petles",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 9,
      name: "Ivan and other stories",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 10,
      name: "Alibaba and 40 theives",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    { id: 11, name: "Tottachan", img: "../../assets/images/alibaba_and40.jpg" },
    {
      id: 12,
      name: "Chicken Soup Souls",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 13,
      name: "Harry Potter",
      img: "../../assets/images/alibaba_and40.jpg",
    },
    {
      id: 14,
      name: "Lord of the Rings",
      img: "../../assets/images/alibaba_and40.jpg",
    },
  ]);

  //   const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://reacttaskmanager-6968e-default-rtdb.firebaseio.com/books.json"
      )
      .then((res) => {
        setBooks(Object.values(res.data));
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Text>HomeScreen</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Item_A", {
                itemId: 86,
                name: item.name,
                itemdata: item,
              })
            }
          >
            <View style={styles.boxbook}>
              <ImageBackground
                source={require("../../assets/images/lordoftherings.jpg")}
                // source={{
                //   uri: "https://res.cloudinary.com/do1sv3tbt/image/upload/v1633240027/book_img/zgousmvjbcqyx7phkudx.jpg",
                // }}
                resizeMode="cover"
                style={styles.imgcover}
              >
                <Text style={styles.texttopic}>{item.name}</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxbook: {
    backgroundColor: "red",
    width: 180,
    margin: 8,
  },
  texttopic: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  imgcover: {
    width: 180,
    height: 240,
  },
});
