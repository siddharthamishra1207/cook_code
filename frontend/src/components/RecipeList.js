// RecipeList.js
import React from "react";
import { Link } from "react-router-dom";


const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h1 className="title-font">Recipes</h1>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="w-full flex flex-col items-center">
              <div className="w-3/4 lg:w-auto flex flex-wrap justify-center lg:justify-evenly space-y-4 mt-4">
                <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow m-4">
                  <img
                    className="rounded-t-lg"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {recipe.title}
                  </h2>
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
