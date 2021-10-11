import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

export default function ProfileScreen({ navigation }) {
  const [profiledata, setProfiledata] = useState([]);
  const [id, setId] = useState(18688);

  useEffect(() => {
    axios
      .get(
        `https://madminiproject-13d9e-default-rtdb.firebaseio.com/users/${id}.json`
      )
      .then((res) => {
        console.log(res.data);
        setProfiledata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Text style={styles.detailtext}>{profiledata.name}</Text>
        </View>
        <View style={styles.detail}>
          <Zocial name="email" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>{profiledata.email}</Text>
        </View>
        <View style={styles.detail}>
          <Fontisto name="phone" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>
            {!profiledata.phonenumber
              ? "No phone number added"
              : profiledata.phonenumber}
          </Text>
        </View>
        <View style={styles.detail}>
          <MaterialIcons name="location-pin" size={24} color="#DE5555" />
          <Text style={styles.detailtext}>
            {!profiledata.address ? "No address" : profiledata.address}
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.boxinfo}>
          <TouchableOpacity onPress={() => navigation.navigate("My Library")}>
            <View style={styles.boxinfotouch}>
              <FontAwesome name="heart" size={24} color="#DE5555" />
              <Text style={styles.infotext}>My Library</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.boxinfo}>
          <TouchableOpacity onPress={() => navigation.navigate("Edit Profile")}>
            <View style={styles.boxinfotouch}>
              <Entypo name="edit" size={24} color="#DE5555" />
              <Text style={styles.infotext}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
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
  boxinfotouch: {
    alignItems: "center",
  },
  infotext: {
    fontSize: 17,
    color: "#DE5555",
  },
});
