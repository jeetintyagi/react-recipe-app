import React from "react";
import RecipeList from "./components/RecipeList"
import "./css/app.css";

function App() {
  return <RecipeList recipes={sampleRecipes}/>;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: "5",
    instructions: "1. Lorem ipsum dolor sit\n1. Lorem ipsum dolor sit\n1.Lorem ipsum dolor sit",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount:"2 pounds"
      },
      {
        id: 1,
        name: "Chicken tikka masala",
        amount:"3 tablespoon"
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "1:45",
    servings: "3 pounds Pork\n 2 tablespoon peri peri",
    instructions: "1. Lorem ipsum dolor sit\n1. Lorem ipsum dolor sit\n1.Lorem ipsum dolor sit",
      ingredients: [
        {
          id: 1,
          name: "Pork",
          amount:"2 pounds"
        },
        {
          id: 1,
          name: "Paprika",
          amount:"2 tablespoon"
        }
      ]
  },
];
export default App;
