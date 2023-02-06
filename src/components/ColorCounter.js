import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onChangeValue, colorIncrement }) => {
  const handleIncreaseColorValue = () => {
    onChangeValue((prev) =>
      prev - colorIncrement > 255 ? prev : prev + colorIncrement
    );
  };

  const handleDecreaseColorValue = () => {
    onChangeValue((prev) =>
      prev - colorIncrement < 0 ? prev : prev - colorIncrement
    );
  };

  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={handleIncreaseColorValue} />
      <Button title={`Decrease ${color}`} onPress={handleDecreaseColorValue} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
