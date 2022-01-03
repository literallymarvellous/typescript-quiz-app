import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/App.styles";
import Header from "./components/Header";
import Aside from "./components/Aside";

import { QuizContentProvider } from "./context/context";
import AnimateRoutes from "./Routes/AnimateRoutes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <QuizContentProvider>
          <Header />
          <Aside />
          <AnimateRoutes />
        </QuizContentProvider>
      </Router>
    </div>
  );
};

export default App;
