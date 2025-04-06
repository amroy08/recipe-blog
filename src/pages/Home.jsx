import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes.json';
import { useState } from 'react';
import { motion } from 'framer-motion';

const allCategories = ["All", ...new Set(recipes.map(r => r.category).filter(Boolean))];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = recipes.filter(recipe => {
    const matchesQuery = recipe.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    // <div className="max-w-7xl mx-auto bg-[#FFF8F1] dark:bg-[#1f1f1f] bg-cover bg-fixed min-h-screen">
<div className="relative max-w-7xl mx-auto bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">

      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-orange-700 dark:text-yellow-300">Explore Our Recipes</h1>
        <input
          type="text"
          placeholder="Search recipes..."
          className="mt-4 w-full max-w-md p-2 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition border hover:scale-105 ${selectedCategory === cat ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-600 dark:bg-yellow-700 dark:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </motion.div>
    </div>
  );
}
