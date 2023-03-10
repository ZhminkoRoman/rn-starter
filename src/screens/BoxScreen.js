import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  viewOneStyle: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    top: 100,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  viewThreeStyle: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
