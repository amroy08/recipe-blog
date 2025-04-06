import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RecipeCard({ recipe }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover brightness-100 dark:brightness-75 transition-all" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-orange-700 dark:text-yellow-300 mb-1">{recipe.title}</h2>
        {recipe.category && <span className="text-xs inline-block bg-orange-100 text-orange-600 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-1 rounded mb-2">{recipe.category}</span>}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-3">{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`} className="text-orange-500 dark:text-yellow-400 font-medium hover:underline">Read More →</Link>
      </div>
    </motion.div>
  );
}