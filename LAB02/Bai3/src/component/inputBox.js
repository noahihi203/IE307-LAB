import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const iconConfig = {
  mail: "mail",
  user: "user",
  password: "lock",
};

const InputBox = ({ type, placeholder, secure = false, onChangeText }) => (
  <View style={styles.container}>
    {iconConfig[type] && (
      <AntDesign name={iconConfig[type]} size={33} color="black" />
    )}
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
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%"
  },
  inputField: {
    fontSize: 18,
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default InputBox;
