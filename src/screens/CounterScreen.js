import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CounterScreen = () => {
  const [countNumber, setCountNumber] = useState(0);

  const handleIncreaseNumber = () => {
    setCountNumber((prev) => prev + 1);
  };

  const handleDecreaseNumber = () => {
    setCountNumber((prev) => prev - 1);
  };

  return (
    <View style={styles.view}>
      <Pressable onPress={handleIncreaseNumber} style={styles.button}>
        <Text>Increase</Text>
      </Pressable>
      <Pressable onPress={handleDecreaseNumber} style={styles.button}>
        <Text>Decrease</Text>
      </Pressable>
      <Text>Current count: {countNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "cyan",
  },
});

export default CounterScreen;
