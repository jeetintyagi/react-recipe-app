import React from "react";
import IngredientList from "./IngredientList";

function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  
  return (
    <div className="card">
      <div>
        <h3>{name}</h3>
      </div>
      <button>Edit</button>
      <button>Delete</button>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
}

export default Recipe;
