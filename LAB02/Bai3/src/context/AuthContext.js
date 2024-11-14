import React, { createContext, useState } from "react";

// Khởi tạo context cho Auth
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState(null);

  const testEmail = "22520733@gm.uit.edu.vn";
  const testPassword = "buiquoclam";

  const login = (email, password) => {
    if (email === testEmail && password === testPassword) {
      setAuthUser({ email });
      setAuthError(null);
    } else {
      setAuthError("Invalid credentials");
    }
  };

  const logout = (navigation) => {
    setAuthUser(null);
    navigation.navigate("login-screen");
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        logout,
        authError,
        validEmail: testEmail,
        validPassword: testPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
