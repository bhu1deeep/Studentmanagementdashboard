// src/components/StudentForm.jsx
import React, { useState, useEffect } from "react";

const StudentForm = ({ initialData = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    class: "",
    age: "",
    email: "",
  });

  
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        roll: initialData.roll || "",
        class: initialData.class || "",
        age: initialData.age || "",
        email: initialData.email || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Student Information
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Name", name: "name", placeholder: "Enter full name" },
          { label: "Roll Number", name: "roll", placeholder: "Enter roll number" },
          { label: "Class", name: "class", placeholder: "Enter class" },
          { label: "Age", name: "age", placeholder: "Enter age" },
          { label: "Email", name: "email", placeholder: "Enter email address" },
        ].map(({ label, name, placeholder }) => (
          <div key={name} className="space-y-1">
            <label 
              className="text-sm font-semibold text-gray-700 mb-1" 
              htmlFor={name}
            >
              {label}
            </label>
            <input
              id={name}
              type={name === "age" ? "number" : name === "email" ? "email" : "text"}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;