// src/pages/EditStudent.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetStudentQuery,
  useUpdateStudentMutation,
} from "../features/students/studentsApi";
import StudentForm from "../components/StudentForm";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: student, isLoading, isError } = useGetStudentQuery(id);
  const [updateStudent] = useUpdateStudentMutation();

  const handleSubmit = async (updatedData) => {
    await updateStudent({ id, ...updatedData });
    navigate("/");
  };

  if (isLoading) return <div>Loading student...</div>;
  if (isError || !student) return <div>Student not found.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Edit Student</h2>
      <StudentForm initialData={student} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditStudent;
