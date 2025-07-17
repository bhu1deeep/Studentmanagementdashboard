// src/pages/CreateStudent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddStudentMutation } from "../features/students/studentsApi";
import StudentForm from "../components/StudentForm";

const CreateStudent = () => {
  const navigate = useNavigate();
  const [addStudent] = useAddStudentMutation();

  const handleSubmit = async (data) => {
    await addStudent(data);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateStudent;

