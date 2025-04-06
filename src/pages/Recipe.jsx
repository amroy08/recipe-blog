import { useParams } from 'react-router-dom';
import recipes from '../data/recipes.json';
import { motion } from 'framer-motion';

export default function Recipe() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <div className="text-center text-red-500">Recipe not found</div>;

  return (
    <motion.div
    className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md mt-6"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
      <h1 className="text-3xl font-bold text-orange-700 mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-xl mb-4 brightness-100 dark:brightness-75 transition" />

      <p className="mb-4 text-gray-700 text-sm">{recipe.description}</p>
      <p className="text-sm text-gray-500 mb-2">⏱ {recipe.time} &nbsp; 👥 Serves: {recipe.servings}</p>

      <h2 className="text-xl font-semibold text-orange-600 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        {recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>

      <h2 className="text-xl font-semibold text-orange-600 mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>
    </motion.div>
  );
}
