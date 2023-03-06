import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setError] = useState(false);
  const errorMessage = "Password must be longer than 5 characters";

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (inputValue.length && inputValue.length < 5) {
      setError(true);
      return;
    }
    setError(false);
  }, [inputValue]);

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={(value) => handleInputValueChange(value)}
      />
      {isError ? <Text>{errorMessage}</Text> : null}
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

export default TextScreen;
