import React, { useState } from "react";
import { View, Text, Stylesheet, Button } from "react-native";

const CounterScreen = () => {
  const [countNumber, setCountNumber] = useState(0);

  const handleIncreaseNumber = () => {
    setCountNumber((prev) => prev + 1);
  };

  const handleDecreaseNumber = () => {
    setCountNumber((prev) => prev - 1);
  };

  return (
    <View>
      <Button onPress={handleIncreaseNumber} title="Increase" />
      <Button onPress={handleDecreaseNumber} title="Decrease" />
      <Text>Current count: {countNumber}</Text>
    </View>
  );
};

export default CounterScreen;
