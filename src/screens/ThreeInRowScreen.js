import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const ThreeInRowScreen = () => {
  const cages = [];
  for (let idx = 0; idx < 36; idx++) {
    cages.push(<View key={idx} style={styles.cage} />);
  }
  return <ScrollView>{cages}</ScrollView>;
};

const styles = StyleSheet.create({
  cage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default ThreeInRowScreen;
