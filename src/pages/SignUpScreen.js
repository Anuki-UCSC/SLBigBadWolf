import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import uniqueRandom from "unique-random";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pwderror, setPwderror] = useState("");
  const uniqueRandomid = uniqueRandom(10000, 20000);

  const onSubmit = () => {
    if (password === confirmpassword) {
      const userid = uniqueRandomid();
      const data = {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        userid: userid,
      };
      axios.put(
        `https://madminiproject-13d9e-default-rtdb.firebaseio.com/users/${userid}.json`,
        data
      );
      setName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
      setPwderror("");
    } else {
      setPwderror("incorrect confirm password!");
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.imgcontainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 140, height: 200 }}
        />
        <View style={styles.fields}>
          <View style={styles.inputboxwrap}>
            <TextInput
              name="name"
              value={name}
              placeholder="Name"
              onChangeText={setName}
              style={styles.TextInputfield}
            />
          </View>
          <View style={styles.inputboxwrap}>
            <TextInput
              name="email"
              value={email}
              placeholder="Email"
              onChangeText={setEmail}
              style={styles.TextInputfield}
            />
          </View>
          <View style={styles.inputboxwrap}>
            <TextInput
              secureTextEntry={true}
              name="password"
              value={password}
              placeholder="Password"
              onChangeText={setPassword}
              style={styles.TextInputfield}
            />
          </View>
          <View style={styles.inputboxwrap}>
            <TextInput
              secureTextEntry={true}
              name="confirmpassword"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChangeText={setConfirmpassword}
              style={styles.TextInputfield}
            />
            <Text style={{ color: "#DE5555", fontSize: 12 }}>{pwderror}</Text>
          </View>

          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.buttonw}>
              <Text style={styles.buttontext}>Register</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 4, alignItems: "center" }}>
            <Text style={styles.terms}>
              by login you agree to this{" "}
              <Text style={styles.b}>Terms and conditions</Text> and{" "}
              <Text style={styles.b}>privacy ploicy</Text>
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ color: "#fff", marginTop: 10 }}>
                  Already have an account?
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("sign up")}>
                <Text style={styles.b}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    flex: 1,
  },
  imgcontainer: {
    marginTop: 40,
    alignItems: "center",
  },
  fields: {
    padding: 20,
    marginTop: 20,
  },
  TextInputfield: {
    backgroundColor: "#fff",
    width: 350,
    padding: 10,
    borderRadius: 100,
    paddingLeft: 30,
  },
  inputboxwrap: {
    marginBottom: 20,
  },
  buttonw: {
    backgroundColor: "#DE5555",
    width: 350,
    padding: 12,
    borderRadius: 100,
    paddingLeft: 30,
    alignItems: "center",
    marginTop: 2,
  },
  buttontext: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
  },
  fogotpwd: {
    color: "#fff",
    alignSelf: "flex-end",
    paddingTop: 5,
  },
  buttonG: {
    borderWidth: 3,
    borderColor: "#DE5555",
    backgroundColor: "#000",
    width: 350,
    padding: 8,
    borderRadius: 100,
    paddingLeft: 30,
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  buttontextG: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 25,
  },
  terms: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    width: 200,
  },
  b: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginLeft: 2,
  },
});
