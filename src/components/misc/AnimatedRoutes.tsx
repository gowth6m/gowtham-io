import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../home/Home";
import { Portfolio } from "../portfolio/Portfolio";
import { PageNotFound } from "./PageNotFound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      {/* <ScrollToTop> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio standalone={true} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </ScrollToTop> */}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
