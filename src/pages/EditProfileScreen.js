import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

export default function EditProfileScreen({ navigation }) {
  const [profiledata, setProfiledata] = useState([]);
  const [id, setId] = useState(18688);
  const [name, setName] = useState("Anuki De Alwis");
  const [email, setEmail] = useState("anugaya.alwis@gmail.com");
  const [phonenumber, setPhonenumber] = useState("0772211333");
  const [address, setAddress] = useState("Rathna Mawatha, Makumbura,Kottawa");

  useEffect(() => {
    axios
      .get(
        `https://madminiproject-13d9e-default-rtdb.firebaseio.com/users/${id}.json`
      )
      .then((res) => {
        console.log(res.data);
        setProfiledata(res.data);
        !res.data.name ? setName("") : setName(res.data.name);
        !res.data.email ? setEmail("") : setEmail(res.data.email);
        !res.data.phonenumber
          ? setPhonenumber("")
          : setPhonenumber(res.data.phonenumber);
        !res.data.address ? setAddress("") : setAddress(res.data.address);
      })
      .catch((err) => console.log(err));
  }, []);

  const onUpdate = () => {
    const data = {
      name: name,
      email: email,
      phonenumber: phonenumber,
      address: address,
    };
    axios
      .patch(
        `https://madminiproject-13d9e-default-rtdb.firebaseio.com/users/${id}.json`,
        data
      )
      .then((res) => {
        console.log(res);
        navigation.navigate("Profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <TextInput
            style={styles.detailtextInput}
            name="name"
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.detail}>
          <Zocial name="email" size={24} color="#DE5555" />
          <TextInput
            style={styles.detailtextInput}
            name="email"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.detail}>
          <Fontisto name="phone" size={24} color="#DE5555" />
          <TextInput
            style={styles.detailtextInput}
            name="phonenumber"
            onChangeText={setPhonenumber}
            value={phonenumber}
            placeholder="add phone number here!"
          />
        </View>
        <View style={styles.detail}>
          <MaterialIcons name="location-pin" size={24} color="#DE5555" />
          <TextInput
            style={styles.detailtextInput}
            name="address"
            onChangeText={setAddress}
            value={address}
            placeholder="add your address here!"
          />
        </View>
        <TouchableOpacity onPress={onUpdate} style={styles.ButtonUpdate}>
          <Text style={{ fontSize: 17, color: "#fff", fontWeight: "bold" }}>
            Update
          </Text>
        </TouchableOpacity>
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
  },
  detail: {
    flexDirection: "row",
    marginBottom: 20,
  },
  detailtextInput: {
    marginLeft: 15,
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#DE5555",
    width: 300,
    backgroundColor: "rgba(222, 85, 85, 0.02)",
    padding: 3,
  },
  ButtonUpdate: {
    backgroundColor: "#DE5555",
    padding: 8,
    width: 200,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 30,
  },
});
