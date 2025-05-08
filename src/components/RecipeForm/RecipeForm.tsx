import React from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './RecipeForm.css';

interface RecipeFormProps {
  recipe: { title: string; ingredients: string; instructions: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ recipe, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} id='recipeForm'>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Generate PDF</button>
    </form>
  );
};

export default RecipeForm;
