import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const PasswordInputScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? (
        <Text>Password must be greater than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default PasswordInputScreen;
