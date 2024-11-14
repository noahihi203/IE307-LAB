import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import InputBox from "../component/inputBox";
import Logo from "../component/logo";
import AppButton from "../component/button";
import { AuthContext } from "../context/AuthContext";


const LoginScreen = ({ navigation }) => {
  const { login, validEmail, validPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // console.log("Email: ", validEmail)
    // console.log("Password: ", validPassword)
    if (email === validEmail && password === validPassword) {
      login(email, password);
      navigation.navigate("MainScreen");
    } else {
      Alert.alert("Incorrect email or password.", "");
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Logo title="Welcome" />
        <InputBox type="mail" placeholder="Email" onChangeText={setEmail} />
        <InputBox
          type="password"
          placeholder="Password"
          secure={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <AppButton title="LOGIN" onPress={handleLogin} />

        <Text style={styles.externalLoginText}>Or login with</Text>

        <View style={styles.externalLoginContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../assets/images/facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../assets/images/google.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.navigationTextContainer}>
          <Text style={styles.navigationTextNormal}>
            {" "}
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("register-screen")}
          >
            <Text style={styles.navigationText}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F2F4F7",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  navigationText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  navigationTextContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  navigationTextNormal: {
    fontSize: 20,
  },/* //Bùi Quốc Lâm - 22520733 */
  externalLoginText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
  forgotText: {
    color: "#D4599E",
    textAlign: "right",
    marginTop: 5,
  },
  externalLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  icon: {
    height: 60,
    width: 60,
    marginHorizontal: 8,
  },
});

export default LoginScreen;
