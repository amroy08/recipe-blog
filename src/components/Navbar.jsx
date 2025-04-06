import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <motion.nav
      className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 shadow-lg p-4 sticky top-0 z-10"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-15 h-15 md:w-17 md:h-17 object-contain hover:scale-110 hover:rotate-1 transition-all duration-300"
          />
          <span className="text-2xl font-bold text-orange-700 dark:text-yellow-400 hover:text-orange-900 transition">
            Diva Desi Kitchen
          </span>
        </Link>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="text-xs text-gray-700 dark:text-gray-300 text-right">
            <p>
              📧{" "}
              <a
                href="mailto:diva141982@gmail.com"
                className="text-blue-500 hover:underline"
              >
                diva141982@gmail.com
              </a>
            </p>
            <p>
              ▶️{" "}
              <a
                href="https://youtube.com/@cookwithdiva145?si=NHJlx1v3tqiW9-Br"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                @cookwithdiva145
              </a>
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:scale-105 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
