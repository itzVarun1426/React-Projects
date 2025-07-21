import Button from "./components/Button";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);
  return (
    <ThemeProvider value={{ themeMode: ThemeMode, darkTheme, lightTheme }}>
      <p className="text-3xl">Change Theme with Tailwind CSS</p>
      <Button />
      <Card />
    </ThemeProvider>
  );
}

export default App;
