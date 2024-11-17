import { supabase } from "./supabaseClient";

export const insertTask = async (taskName: string) => {
  try {
    const { data, error } = await supabase
      .from(`Tasks`)
      .insert([
        { name: taskName } 
      ]);

    if (error) {
      console.error(`Erreur lors de l'insertion de la tâche:`, error);
      return null;
    } else {
      console.log(`Tâche insérée:`, taskName);
      return data;
    }
  } catch (error) {
    console.error(`Une erreur s'est produite:`, error);
    return null;
  }
};
