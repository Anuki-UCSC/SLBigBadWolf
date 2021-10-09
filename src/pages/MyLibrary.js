import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyLibrary() {
  const [mybooks, setMyBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://reacttaskmanager-6968e-default-rtdb.firebaseio.com/books.json"
      )
      .then((res) => {
        setMyBooks(Object.values(res.data));
        console.log(mybooks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.text}>My Book Collection</Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          numColumns={3}
          data={mybooks}
          renderItem={({ item }) => (
            <View style={styles.imagebox}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Item", {
                    item_id: 33,
                    itemData: item,
                    name: item.name,
                  })
                }
              >
                <ImageBackground
                  source={require("../../assets/images/lordoftherings.jpg")}
                  // source={{
                  //   uri: "https://res.cloudinary.com/do1sv3tbt/image/upload/v1633240027/book_img/zgousmvjbcqyx7phkudx.jpg",
                  // }}
                  resizeMode="cover"
                  style={styles.imgcover}
                ></ImageBackground>
                <Text>{item.name.slice(0, 15)}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgcover: {
    width: 100,
    height: 150,
  },
  imagebox: {
    marginRight: 27,
    marginBottom: 20,
  },
  text: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
  },
});
