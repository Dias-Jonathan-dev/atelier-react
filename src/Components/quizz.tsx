import { useEffect } from "react";

const data = [
  {
    question: "Qu'est ce que React?",
    options: [
      "Une bibliothèque JavaScript pour construire des interfaces utilisateur",
      "Un langage de programmation",
      "Une base de données",
    ],
    answer:
      "Une bibliothèque JavaScript pour construire des interfaces utilisateur",
  },
  {
    question: "Quelle est la syntaxe utilisée dans un projet React?",
    options: ["La syntaxe KFX", "La syntaxe TSC", "La syntaxe JSX"],
    answer: "La syntaxe JSX",
  },
  {
    question:
      "Quelle est la commande pour créer une nouvelle application React avec Vite ?",
    options: [
      "npx create-react-app my-app",
      "npm create vite@latest my-app",
      "npm install vite@latest react",
    ],
    answer: "npm install vite@latest react",
  },
  {
    question:
      "Comment passe-t-on des données d'un composant parent à un composant enfant ?",
    options: ["Avec des hooks", "Avec des classes", "Avec des props"],
    answer: "Avec des props",
  },
  {
    question:
      "Quelle est la différence principale entre une prop et un state ?",
    options: [
      "Les props sont immuables, le state est mutable",
      "Les props sont locales, le state est global",
      "Les props sont pour les hooks, le state pour les classes",
    ],
    answer: "Les props sont immuables, le state est mutable",
  },
  {
    question: "Que fait la méthode setState dans un composant de classe ?",
    options: [
      "Elle met à jour les styles",
      "Elle met à jour les props",
      "Elle met à jour l'état du composant",
    ],
    answer: "Elle met à jour l'état du composant",
  },
  {
    question:
      "Quelle est la syntaxe correcte pour importer un composant React ?",
    options: [
      "import { Component } from './Component'",
      "require('./Component');",
      "import Component from './Component';",
    ],
    answer: "import Component from './Component';",
  },
  {
    question:
      "Quelle est la commande pour lancer la visualisation d'un serveur local pour ton projet React avec vite ?",
    options: ["npm launch dev", "npx run dev", "npm run dev"],
    answer: "npm run dev",
  },
  {
    question: "Qu'est ce qu'un composant dans React?",
    options: [
      "Une méthode pour gérer l'état",
      "Une fonction ou une classe qui retourne un élément JSX",
      "Une base de données",
    ],
    answer: "Une base de données",
  },
  {
    question:
      "Que fait la méthode map() dans React lorsqu'elle  est utilisée avec des listes ?",
    options: [
      "Elle trie les éléments d'une liste",
      "Elle supprime les doublons dans une liste",
      "Elle crée une nouvelle liste d'éléments JSX",
    ],
    answer: "Elle crée une nouvelle liste d'éléments JSX",
  },
];

export default data;
