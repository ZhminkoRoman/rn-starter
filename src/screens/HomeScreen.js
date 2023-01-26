import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const handleComponentDemoPressed = () => {
    navigate("Components");
  };

  const handleListDemoPressed = () => {
    navigate("List");
  };

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={handleComponentDemoPressed}
      />
      <TouchableOpacity onPress={handleListDemoPressed}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
