import { useState, useEffect } from "react";

function useDarkMode(initValue: boolean) {
  const [darkMode, setDarkMode] = useState(initValue);

  useEffect(() => {
    const colorMode = darkMode ? "dark" : "light";
    document.getElementById("html")?.setAttribute("data-bs-theme", colorMode);
  }, [darkMode]);

  return { darkMode, setDarkMode };
}

export default useDarkMode;
