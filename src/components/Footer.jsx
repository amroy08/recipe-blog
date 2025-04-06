import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-orange-50 text-center p-4 mt-10 border-t border-orange-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Diva Desi Kitchen. All rights reserved.</p>
    </motion.footer>
  );
}