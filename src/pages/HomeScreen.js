import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  ImageBackgroundComponent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // https://reacttaskmanager-6968e-default-rtdb.firebaseio.com/books.json
    axios
      .get(
        "https://madminiproject-13d9e-default-rtdb.firebaseio.com/books.json"
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
    <View style={styles.homecontainer}>
      <View style={styles.categorytitle}>
        <View>
          <Text style={styles.titletext}>New Arrivals (6)</Text>
        </View>
        <View>
          <Text> </Text>
        </View>
      </View>
      <View>
        <SafeAreaView style={styles.bookScroll}>
          <FlatList
            horizontal
            data={books}
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
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    marginTop: 20,
  },
  categorytitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  imgcover: {
    width: 100,
    height: 150,
  },
  imagebox: {
    marginLeft: 10,
  },
  bookScroll: {
    marginTop: 10,
  },
  titletext: {
    fontSize: 15,
  },
});
