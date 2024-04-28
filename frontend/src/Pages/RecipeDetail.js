import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';


const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://the-vegan-recipes-db.p.rapidapi.com/${id}`, {
          headers: {
            'X-RapidAPI-Key': '4bf1607cb8msh5e699065c14b788p1db63bjsna38fb7cc197a',
            'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
          }
        });
        setRecipe(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackButton/>
      <h1 className='title-font'>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2> <span className='font-semibold'>Difficulty:  </span> {recipe.difficulty}</h2>
      <p> <span className='font-semibold'>Portion: </span>{recipe.portion}</p>
      <p><span className='font-semibold'>Time:</span> {recipe.time}</p>
      <p><span className='font-semibold'>Description:</span> {recipe.description}</p>
      <h2><span className='font-semibold'>Ingredients:</span></h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2><span className='font-semibold'>Method:</span></h2>
<ol>
  {recipe.method.map((stepObject, index) => (
    <li key={index}>Step {index + 1}: {Object.values(stepObject)[0]}</li>
  ))}
</ol>


    </div>
  );
};

export default RecipeDetail;
