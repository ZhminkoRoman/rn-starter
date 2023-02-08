import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onChangeValue, colorIncrement }) => {
  const typeColor = `change_${color.toLowerCase()}`;

  const handleIncreaseColorValue = () => {
    onChangeValue({ type: typeColor, payload: colorIncrement });
  };

  const handleDecreaseColorValue = () => {
    onChangeValue({ type: typeColor, payload: -colorIncrement });
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
