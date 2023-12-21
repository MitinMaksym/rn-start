import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = (props) => {
  const handleGoalDelete = () => props.onDelete(props.item.id);

  return (
    <Pressable onPress={handleGoalDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 3,
    backgroundColor: "#0077b6",
    marginBottom: 10,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
