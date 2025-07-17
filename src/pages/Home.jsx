// src/pages/Home.jsx
import React from "react";
import StudentList from "../components/StudentList";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="dashboard-wrapper">
       
        <h2 className="home-subtitle">All Students</h2>
        <StudentList />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
