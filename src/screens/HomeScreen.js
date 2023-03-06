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

  const handleImageScreenPressed = () => {
    navigate("Image");
  };

  const handleCounterScreenPressed = () => {
    navigate("Counter");
  };

  const handleColorScreenPressed = () => {
    navigate("Color");
  };

  const handleSquareScreenPressed = () => {
    navigate("Square");
  };

  const handleTextScreenPressed = () => {
    navigate("Text");
  };

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={handleComponentDemoPressed}
      />
      <Button title="Go to List Demo" onPress={handleListDemoPressed} />
      <Button title="Go to Image Screen" onPress={handleImageScreenPressed} />
      <Button
        title="Go to Counter Screen"
        onPress={handleCounterScreenPressed}
      />
      <Button title="Go to Color Screen" onPress={handleColorScreenPressed} />
      <Button title="Go to Square Demo" onPress={handleSquareScreenPressed} />
      <Button title="Go to Text Demo" onPress={handleTextScreenPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
