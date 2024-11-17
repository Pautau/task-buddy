import { supabase } from "./supabaseClient";

export const deleteTask = async (taskId: number) => {
  const { data, error } = await supabase
    .from(`Tasks`) // Nom de la table
    .delete() // Action de suppression
    .eq(`id`, taskId); // Supprimer la tâche où id correspond à taskId

  if (error) {
    console.error(`Erreur lors de la suppression de la tâche:`, error);
    return null;
  }

  console.log(`Tâche supprimée avec succès:`, data);
  return data; // Contient les données supprimées
};
