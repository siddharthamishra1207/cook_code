// Recipes.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardA from '../components/CardA';
import { Link } from 'react-router-dom';

const Res = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/getall')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {recipes.map(recipe => (
            <CardA key={recipe._id} title={recipe.title} description={recipe.description} _id={recipe._id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Res;
