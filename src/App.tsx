import "./App.css";

import NavBar from "./components/nav/NavBar";
import { Footer } from "./components/footer/Footer";
import AnimatedRoutes from "./components/misc/AnimatedRoutes";

function App() {
  return (
    <>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;
