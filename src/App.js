import React from "react";
import RecipeList from "./components/RecipeList";

function App() {
  return <RecipeList recipes={sampleRecipes}/>;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: "3 pounds chicken\n 2 tablespoon chicken tikka masala",
    instructions:
      "1. Lorem ipsum dolor sit\n1. Lorem ipsum dolor sit\n1.Lorem ipsum dolor sit",
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "1:45",
    servings: "3 pounds Pork\n 2 tablespoon peri peri",
    instructions:
      "1. Lorem ipsum dolor sit\n1. Lorem ipsum dolor sit\n1.Lorem ipsum dolor sit",
  },
];
export default App;
