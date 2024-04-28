import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import BackButton from '../components/BackButton';


const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://the-vegan-recipes-db.p.rapidapi.com/', {
          headers: {
            'X-RapidAPI-Key': '4bf1607cb8msh5e699065c14b788p1db63bjsna38fb7cc197a',
            'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
          }
        });
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);


  return (
    <div>
        <BackButton/>
        <RecipeList recipes={recipes} />
    </div>
  )
}

export default Recipes

