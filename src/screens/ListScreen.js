import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 50 },
    { name: "Friend #4", age: 18 },
    { name: "Friend #5", age: 73 },
    { name: "Friend #6", age: 7 },
    { name: "Friend #7", age: 547 },
    { name: "Friend #8", age: 31 },
    { name: "Friend #9", age: 33 },
  ];
  return (
    <FlatList
      data={friends}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{item.name} - </Text>
            <Text>{item.age}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  textStyle: {
    // marginRight: 10,
  },
});

export default ListScreen;
