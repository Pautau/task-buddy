# Task Manager

## Description
Task Manager est une application simple de gestion des tâches. Elle permet à l'utilisateur de :
- Afficher une liste des tâches existantes.
- Créer de nouvelles tâches.
- Supprimer des tâches existantes.

Chaque tâche affiche les informations suivantes :
- **Nom de la tâche**.
- **Date de création**.
- **Statut d'achèvement** 

L'application utilise **React Native** sous **Expo** pour le front-end et **Supabase** comme backend pour la gestion des données.

---

## Fonctionnalités
1. **Affichage des tâches** :
   - Les tâches sont récupérées depuis une base de données Supabase.
   - Chaque tâche inclut :
     - Son nom.
     - La date et l'heure de création.
     - Son statut (terminée ou non).

2. **Ajout d'une tâche** :
   - Ajoutez une nouvelle tâche en fournissant uniquement son nom.
   - Les tâches ajoutées apparaissent automatiquement dans la liste.

3. **Suppression d'une tâche** :
   - Supprimez une tâche en un seul clic.
   - Les tâches supprimées sont immédiatement retirées de la liste.

---

## Technologies utilisées
- **React Native** : Framework JavaScript pour le développement mobile multiplateforme.
- **Expo** : Plateforme pour créer rapidement des applications React Native.
- **Supabase** : Backend-as-a-Service pour la gestion de base de données et API REST.

---
