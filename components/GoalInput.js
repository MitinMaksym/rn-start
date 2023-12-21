import React, { useState } from "react";
import { Button, Modal } from "react-native";
import { View } from "react-native";
import { StyleSheet, TextInput } from "react-native";

export const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const handleAddGoal = () => {
    props.onAddGoal(goalText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={goalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.actionButtons}>
          <Button title="Add a new goal" onPress={handleAddGoal} />
          <Button title="Cancel" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderColor: "#cccccc",
    borderRadius: 5,
  },

  inputContainer: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
  },
});
