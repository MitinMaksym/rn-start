import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { Button } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);

    setModalVisible(false);
  };

  const openGoalModal = () => {
    setModalVisible(true);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const closeGoalModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoalBtn}>
        <Button title="Add new goal" onPress={openGoalModal} />
      </View>
      <GoalInput
        style={styles.input}
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onClose={closeGoalModal}
      />

      <Text style={styles.goalsTitle}>List of goals...</Text>

      <View>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  goalsTitle: {
    marginBottom: 10,
  },
  addGoalBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});
