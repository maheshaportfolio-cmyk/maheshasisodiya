import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={dark ? "dark" : "light"}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={dark ? "bg-black text-white min-h-screen"
                          : "bg-white text-black min-h-screen"}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
