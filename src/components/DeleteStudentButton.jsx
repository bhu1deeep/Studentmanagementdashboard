// src/components/DeleteStudentButton.jsx
import React from "react";
import { useDeleteStudentMutation } from "../features/students/studentsApi";

const DeleteStudentButton = ({ id }) => {
  const [deleteStudent] = useDeleteStudentMutation();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 underline"
    >
      Delete
    </button>
  );
};
export default DeleteStudentButton;

