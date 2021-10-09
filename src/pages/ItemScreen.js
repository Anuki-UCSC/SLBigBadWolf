import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ItemScreen({ navigation, route }) {
  const { item_id, itemData, name } = route.params;
  return (
    <View>
      <ScrollView>
        <View style={styles.ashBox}>
          <View style={styles.box1}>
            <Text style={styles.bookTitle}>
              {name} {name}
            </Text>
            <Text style={styles.autorName}>Autor : J K Rowling</Text>
            <Text style={styles.categoryNames}>Fiction, Children, Fantacy</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={23} color="goldenrod" />
              <FontAwesome name="star" size={23} color="goldenrod" />
              <FontAwesome name="star" size={23} color="goldenrod" />
              <FontAwesome name="star" size={23} color="goldenrod" />
              <Text style={styles.ratingnumber}>(4.3)</Text>
            </View>
            <TouchableOpacity style={styles.buttonwrap}>
              <View style={styles.buttonAddToLibrary}>
                <FontAwesome name="heart" size={24} color="black" />
                <Text>Add to my Library</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <Image
              style={styles.imgBook}
              source={require("../../assets/images/harrypotter.jpg")}
            />
            <View style={styles.reviewshort}>
              <Text>reviews(4)</Text>
            </View>
          </View>
        </View>
        <View style={styles.descBox}>
          <Text style={styles.topicbold}>Description</Text>
          <Text>
            Harry Potter is a series of seven fantasy novels written by British
            author J. K. Rowling. The novels chronicle the lives of a young
            wizard, Harry Potter, and his friends Hermione Granger and Ron
            Weasley, all of whom are students at Hogwarts School of Witchcraft
            and Wizardry. An irresistible new edition of Harry Potter and the
            Philosopher's Stone created with ultra-talented designers MinaLima,
            the design magicians behind the gorgeous visual graphic style of the
            Harry Potter and Fantastic Beasts films.
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.topicbold}>Reviews (4)</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.reviewperson}
                  source={require("../../assets/CommonImgs/profile.png")}
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.reviewpersonName}>Anna Wijewardhana</Text>
                <Text style={styles.reviewtext}>
                  Great Book for children! Nicely written.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ashBox: {
    width: "100%",
    backgroundColor: "#DADADA",
    padding: 10,
    flexDirection: "row",
    paddingBottom: 20,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  descBox: {
    width: "100%",
    padding: 20,
  },
  box1: {
    flex: 6,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box2: {
    marginTop: 10,
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  imgBook: {
    width: 150,
    height: 230,
    resizeMode: "cover",
  },
  autorName: {
    marginTop: 10,
  },
  categoryNames: {
    marginTop: 30,
  },
  rating: {
    marginTop: 25,
    flexDirection: "row",
  },
  ratingnumber: {
    fontSize: 15,
    paddingTop: 2,
    paddingLeft: 5,
  },
  buttonAddToLibrary: {
    backgroundColor: "#DE5555",
    width: 160,
    alignItems: "center",
    padding: 8,
  },
  buttonwrap: {
    marginTop: 20,
    flexDirection: "row",
  },
  topicbold: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewshort: {
    marginTop: 20,
  },
  reviewperson: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  reviewpersonName: {},
  reviewtext: {
    color: "#6c7377",
    fontSize: 12,
  },
});
