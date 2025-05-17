// src/components/RecipeButton.js
import React from 'react';

export default function RecipeButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: 16, borderRadius: 6, cursor: 'pointer' }}>
      Get Recipe
    </button>
  );
}
