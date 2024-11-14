import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();
//22520733 - Bùi Quốc Lâm
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login-screen"
        component={LoginScreen}
        options={{ title: "Đăng nhập" }}
      />
      <Stack.Screen
        name="register-screen"
        component={RegisterScreen}
        options={{ title: "Đăng ký" }}
      />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
