import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/NavigationBar";
import { FlightsPage } from "./pages/FlightsListPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flight_list" element={<FlightsPage />} />
      </Routes>
    </>
  );
}

export default App;
