import "./App.css";

import NavBar from "./components/nav/NavBar";
import { Footer } from "./components/footer/Footer";
import AnimatedRoutes from "./components/misc/AnimatedRoutes";

import { MyGlobalContext } from "./components/context/GlobalContext";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/misc/LoadingScreen";

function App() {
  const [lightThemeGlobal, setLightThemeGlobal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <>
      <MyGlobalContext.Provider
        value={{ lightThemeGlobal, setLightThemeGlobal }}
      >
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </MyGlobalContext.Provider>
    </>
  );
}

export default App;
