import React from "react";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/App.styles";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Info from "./components/Info";
import { AnimatePresence } from "framer-motion";
import { QuizContentProvider } from "./context/context";
import Difficulty from "./components/Difficulty";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <QuizContentProvider>
          <Header />
          <Aside />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="info" element={<Info />} />
              <Route path="difficulty" element={<Difficulty />} />
            </Routes>
          </AnimatePresence>
        </QuizContentProvider>
      </Router>
    </div>
  );
};

export default App;
