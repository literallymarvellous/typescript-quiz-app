import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../components/Landing";
import Info from "../components/Info";
import Quiz from "../components/Quiz";
import Difficulty from "../components/Difficulty";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="info" element={<Info />} />
        <Route path="difficulty" element={<Difficulty />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
