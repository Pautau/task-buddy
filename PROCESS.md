# How I developped and struggled👋
## Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev) to generate the project with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app)
- [Supabase](https://supabase.com/)

## Installation et configuration du projet sous Expo
1. Création de compte Expo et initialisation du projet sur Github
2. Suivi du guide Expo

### **Difficulté rencontrée**
- **Difficulté_1** : Git refuse de cloner le projet et de push les changements
    - **Solutions** : Création d'une clé SSH publique
    - **Détails** : Git ne supporte plus l'authentification par mot de passe depuis 2021

## Lancement de l'application sous Expo Go (web et mobile)
1. L'application se lance avec la commande : ```npx expo start```
2. Les changements sont dynamiques, il n'y a pas besoin de recharger la page pour voir les changements (**React**)

### **Difficulté rencontrée**
- **Difficulté_1** : Impossible d'activer le rendu sur mobile
    - **Solutions** : Changer de **Development build** à **Expo Go**

## Création de la base de données avec Supabase
1. Création et configuration du compte Supabase avec formule gratuite
2. Développement de la fonction pour se connecter à la base de données Supabase à l'aide des deux clés (**Project URL** et **API Key**)
3. Création de la table "Tasks"
4. Développement de la fonction dynamique permettant de récupérer les données du nom d'une table passée en propriété

