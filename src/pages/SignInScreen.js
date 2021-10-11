import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.background}>
      <View style={styles.imgcontainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 180, height: 230 }}
        />
        <View style={styles.fields}>
          <View style={styles.inputboxwrap}>
            <TextInput
              name="email"
              value={email}
              placeholder="Email"
              style={styles.TextInputfield}
            />
          </View>
          <View style={styles.inputboxwrap}>
            <TextInput
              type="password"
              name="password"
              value={email}
              placeholder="Password"
              style={styles.TextInputfield}
            />
            <View>
              <Text style={styles.fogotpwd}>Forgot password?</Text>
            </View>
          </View>

          <View style={styles.buttonw}>
            <Text style={styles.buttontext}>Sign In</Text>
          </View>
          <View style={styles.buttonG}>
            <Image
              source={require("../../assets/Google.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text style={styles.buttontextG}>Sign IN with google</Text>
          </View>
          <View style={{ marginTop: 5, alignItems: "center" }}>
            <Text style={styles.terms}>
              by login you agree to this{" "}
              <Text style={styles.b}>Terms and conditions</Text> and{" "}
              <Text style={styles.b}>privacy ploicy</Text>
            </Text>
            <Text style={{ color: "#fff", marginTop: 10 }}>
              Don’t you have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("sign in")}>
              {" "}
              <Text style={styles.b}>Register</Text>
            </TouchableOpacity>
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
    marginTop: 10,
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
  },
});
