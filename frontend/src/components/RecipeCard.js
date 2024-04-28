const RecipeCard = ({ recipe }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.title}</div>
          <p className="text-gray-700 text-base">{recipe.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {recipe.category}
          </span>
        </div>
      </div>
    );
  };

  export default RecipeCard;