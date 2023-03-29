import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const STEP = 10;

const reducer = (state, action) => {
  // state === { change_red: number, change_green: number, change_blue: number }
  // action === {type, payload}
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ type: "change_red", payload: STEP })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * STEP })}
      />
      <ColorCounter
        color="green"
        onIncrease={() => dispatch({ type: "change_green", payload: STEP })}
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * STEP })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: STEP })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * STEP })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreenReducer;
