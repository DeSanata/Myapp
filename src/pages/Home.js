// src/pages/Home.js
import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import RecipeButton from '../components/RecipeButton';

export default function Home() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const getRandomRecipe = () => {
    const idx = Math.floor(Math.random() * recipes.length);
    setCurrentRecipe(recipes[idx]);
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center' }}>
      <h1>Random Recipe Generator</h1>
      <RecipeButton onClick={getRandomRecipe} />
      <RecipeCard recipe={currentRecipe} />
    </div>
  );
}
