import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, TextInput, ToastAndroid, View } from "react-native";
import { Task } from "../models/Task";
import { deleteTask } from "../utils/supabaseDelete";
import { insertTask } from "../utils/supabaseInsert";
import { fetchData } from "../utils/supabaseSelect";


export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  const [taskName, setTaskName] = useState(``);
  const [message, setMessage] = useState(``);

  useEffect(() => {
    fetchData(`Tasks`, setLoading, setTasks);
  }, []); 

  const handleAddTask = async () => {
    if (!taskName) {
      setMessage(`Le nom de la tâche ne peut pas être vide.`);
      return;
    }

    await insertTask(taskName);
    
    setTaskName(``);  // Réinitialiser le champ de saisie
    ToastAndroid.showWithGravity(
      `Tâche ajoutée avec succès`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    fetchData(`Tasks`, setLoading, setTasks);
  };

  const handleDeleteTask = async (taskId: number) => {
    if (!taskId) {
      setMessage(`La tâche n'existe pas`);
      return;
    }

    await deleteTask(taskId);
    ToastAndroid.showWithGravity(
      `Tâche supprimée avec succès`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    fetchData(`Tasks`, setLoading, setTasks);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder={`Nom de la tâche`}
        value={taskName}
        onChangeText={setTaskName}
        style={{
          height: 40,
          borderColor: `gray`,
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
      />
      <Button title={`Ajouter la tâche`} onPress={handleAddTask} />

      {loading ? (
        <ActivityIndicator size={`large`} color={`#0000ff`} />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
            <View style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.created_at}</Text>
              <Text>{item.done ? item.done.toString() : `Not done`}</Text>
            </View>
            <Button title={`Supprimer`} color={`red`} onPress={() => handleDeleteTask(item.id)}></Button>
            </>
          )}
        />
      )}
    </View>
  );
}
