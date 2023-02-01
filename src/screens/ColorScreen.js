import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const handleAddColor = () => {
    const color = randomRgb();
    setColors([...colors, color]);
  };

  return (
    <View style={styles.view}>
      <Pressable style={styles.button} onPress={handleAddColor}>
        <Text>Add a Color</Text>
      </Pressable>
      <FlatList
        data={colors}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
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
  colorBox: {},
});

export default ColorScreen;
