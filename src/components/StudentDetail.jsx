// src/components/StudentDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "../features/students/studentsApi";

const StudentDetail = () => {
  const { id } = useParams();
  const { data: student, isLoading, isError } = useGetStudentQuery(id);

  if (isLoading) return <div>Loading student details...</div>;
  if (isError || !student) return <div>Error fetching student details.</div>;

  return (
<div className="student-detail-container">
  <h2 className="student-detail-title">Student Details</h2>
  <p className="student-detail-field"><strong>Name:</strong> {student.name}</p>
  <p className="student-detail-field"><strong>Roll Number:</strong> {student.roll}</p>
  <p className="student-detail-field"><strong>Class:</strong> {student.class}</p>
  <p className="student-detail-field"><strong>Age:</strong> {student.age}</p>
  <p className="student-detail-field"><strong>Email:</strong> {student.email}</p>
</div>

  );
};

export default StudentDetail;
