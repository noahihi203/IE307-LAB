import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Type = ({ type }) => {
  if (type === "mail") {
    return <AntDesign name="mail" size={33} color="black" />;
  }
  if (type === "user") {
    return <AntDesign name="user" size={33} color="black" />;
  }
  if (type === "password") {
    return <AntDesign name="lock" size={33} color="black" />;
  }
  return null;
};

const InputBox = ({ type, placeholder, secure = false, onChangeText }) => (
  <View style={styles.container}>
    <Type type={type} />
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      secureTextEntry={secure}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 15,
    paddingStart: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    flexDirection: "row",
    paddingVertical: 0,
    height: 60,
    alignItems: "center",
  },
  inputField: {
    fontSize: 18,
    width: 300,
    height: 50,
    paddingStart: 20,
  },
});

export default InputBox;
