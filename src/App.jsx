// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4 text-gray-800">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">Student Management Dashboard</h1>
        </header>
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
