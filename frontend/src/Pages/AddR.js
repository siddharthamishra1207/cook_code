import React, { useState } from 'react';
import BackButton from '../components/BackButton';

const AddR = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [recipeDetails, setRecipeDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, sending data to a server
    // You can access recipeName, ingredients, cookingTime, and recipeDetails here
  };

  return (
    <>  
    <BackButton />
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-3/4">
        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="recipeName" className="block text-gray-700 font-bold mb-2">Recipe Name</label>
            <input type="text" id="recipeName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
            <textarea id="ingredients" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="cookingTime" className="block text-gray-700 font-bold mb-2">Average Cooking Time (in minutes)</label>
            <input type="number" id="cookingTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="recipeDetails" className="block text-gray-700 font-bold mb-2">Recipe Details</label>
            <textarea id="recipeDetails" className="shadow appearance-none border rounded w-full py-4 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{ height: "200px" }} value={recipeDetails} onChange={(e) => setRecipeDetails(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddR;
