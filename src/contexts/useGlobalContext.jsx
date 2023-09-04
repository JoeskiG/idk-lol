import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [colorMode, setColorMode] = useState("light");
  const [isMobile, setIsMobile] = useState(false); //Components can use this to check if the client is on a small screen or not
  const [errors, setErrors] = useState([]);
  const [modal, setModal] = useState(null);

  const clearModal = () => {
    setModal(null);
  };

  const addErrors = (errs) => {
    if (!Array.isArray(errs)) {
      errs = [errs];
    }

    setErrors([...errors, ...errs]);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  const clearErrors = () => {
    setErrors([]);
  };

  useEffect(() => {
    
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => //Listen for browser theme changes and set color mode variable if changed
        setColorMode(e.matches ? "dark" : "light")
      );

    //Initially set color theme state variable to browser's theme
    setColorMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => { });
    };
  }, []);

  //Toggles between dark and light mode (essential feature :))
  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = {
    modal,
    setModal,
    addErrors,
    clearModal,
    isMobile,
    errors,
    clearErrors,
    colorMode,
    toggleColorMode,
    setColorMode,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
