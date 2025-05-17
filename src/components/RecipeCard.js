// src/components/RecipeCard.js
import React from 'react';

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, margin: 16 }}>
      <h2>{recipe.name}</h2>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
}
