import "./App.css";

import NavBar from "./components/nav/NavBar";
import { Footer } from "./components/footer/Footer";
import AnimatedRoutes from "./components/misc/AnimatedRoutes";

import { MyGlobalContext } from "./components/context/GlobalContext";
import { useState } from "react";

function App() {
  const [lightThemeGlobal, setLightThemeGlobal] = useState<boolean>(false);

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
