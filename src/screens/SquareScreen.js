import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

// I'm not agree with this type of solution, useState here will be much better
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload,
          };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {
            ...state,
            green: state.green + action.payload,
          };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.payload,
          };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        color="Red"
        onChangeValue={dispatch}
        colorIncrement={COLOR_INCREMENT}
      />
      <ColorCounter
        color="Green"
        onChangeValue={dispatch}
        colorIncrement={COLOR_INCREMENT}
      />
      <ColorCounter
        color="Blue"
        onChangeValue={dispatch}
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
