import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import InputBox from "../component/inputBox";
import Logo from "../component/logo";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Logo title="Welcome" />
      <InputBox type="mail" placeholder="Email" onChangeText={setEmail} />
      <InputBox
        type="password"
        placeholder="Password"
        onChangeText={setPassword}
      />
      <View style={styles.botContent}>
        <Text style={styles.textToRegister}>
          <Text>Don't have a account? </Text>
          <Text
            style={styles.toRegister}
            onPress={() => navigation.navigate("register-screen")}
          >
            {" "}
            Sign up here{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  toRegister: {
    color: "blue",
    fontWeight: "bold",
  },
  textToRegister: {
    fontSize: 20,
  },
});

export default LoginScreen;
