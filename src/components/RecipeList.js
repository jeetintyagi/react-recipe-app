import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe}></Recipe>;
        })}
      </div>
      <div>
        <button>Add Recipe</button>
      </div>
    </>
  );
}

export default RecipeList;
