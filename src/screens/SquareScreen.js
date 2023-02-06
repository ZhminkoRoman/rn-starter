import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onChangeValue={setRed}
        colorIncrement={COLOR_INCREMENT}
      />
      <ColorCounter
        color="Green"
        onChangeValue={setGreen}
        colorIncrement={COLOR_INCREMENT}
      />
      <ColorCounter
        color="Blue"
        onChangeValue={setBlue}
        colorIncrement={COLOR_INCREMENT}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
