import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Try() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/getall/re/66280a7eaea0544d32507639")
        .then(response => {
          setRecipe(response.data);
        })
        .catch(error => {
          console.error('Error fetching recipe details:', error);
        });
    }, [id]);
  
    if (!recipe) {
      return <div>Loading...</div>;
    }


  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.recipes}</p>
      {/* Render other details */}
    </div>
  )
}

export default Try