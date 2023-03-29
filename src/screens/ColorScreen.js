import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { randomRgb } from "../utils/randomRgb";

const ColorScreen = () => {
  let [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
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

const styles = StyleSheet.create({});

export default ColorScreen;
