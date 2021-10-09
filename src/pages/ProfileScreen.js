import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../assets/CommonImgs/Ellipse.png")}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={{ alignItems: "center" }}>
            <View>
              <Image
                source={require("../../assets/CommonImgs/profileimg.jpg")}
                style={styles.Profileimg}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsview}>
        <View style={styles.detail}>
          <Ionicons name="person" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>Anuki De Alwis</Text>
        </View>
        <View style={styles.detail}>
          <Zocial name="email" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>anugaya.alwis@gmail.com</Text>
        </View>
        <View style={styles.detail}>
          <Fontisto name="phone" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>0772211333</Text>
        </View>
        <View style={styles.detail}>
          <MaterialIcons name="location-pin" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>
            Rathna Mawatha, Makumbura,Kottawa
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.boxinfo}>
          <FontAwesome name="heart" size={24} color="#DE5555" />
          <Text style={styles.infotext}>My Library</Text>
        </View>
        <View style={styles.boxinfo}>
          <FontAwesome name="list" size={24} color="#DE5555" />
          <Text style={styles.infotext}>Categories</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    // height: 200,
  },
  Profileimg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    display: "flex",
    top: 60,
  },
  detailsview: {
    marginTop: 90,
    marginHorizontal: 30,
    alignItems: "center",
  },
  detail: {
    flexDirection: "row",
    marginBottom: 20,
  },
  detailtext: {
    marginTop: 6,
    marginLeft: 8,
    fontSize: 15,
  },
  info: {
    marginTop: 30,
    backgroundColor: "rgba(222, 85, 85, 0.12)",
    marginHorizontal: 30,
    padding: 20,
    flexDirection: "row",
  },
  boxinfo: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: "#DE5555",
    borderLeftColor: "#DE5555",
  },
  infotext: {
    fontSize: 17,
    color: "#DE5555",
  },
});
