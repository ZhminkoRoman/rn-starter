import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title = "There is no title", image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>{`Image score - ${score}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
