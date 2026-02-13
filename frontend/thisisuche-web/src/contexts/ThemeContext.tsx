import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // Start with light mode

  useEffect(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes
    root.classList.remove("light", "dark");
    
    // Add current theme
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
    
    console.log("Theme changed to:", theme); // Debug log
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log("Toggling from", prev, "to", newTheme); // Debug log
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}