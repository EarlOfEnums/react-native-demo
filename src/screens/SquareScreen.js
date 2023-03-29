import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const STEP = 10;

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setRed(red + STEP >= 255 ? 255 : red + STEP)}
        onDecrease={() => setRed(red - STEP <= 0 ? 0 : red - STEP)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setGreen(green + STEP >= 255 ? 255 : green + STEP)}
        onDecrease={() => setGreen(green - STEP <= 0 ? 0 : green - STEP)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setBlue(blue + STEP >= 255 ? 255 : blue + STEP)}
        onDecrease={() => setBlue(blue - STEP <= 0 ? 0 : blue - STEP)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
