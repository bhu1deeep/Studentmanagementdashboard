import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetStudentsQuery } from "../features/students/studentsApi";
import DeleteStudentButton from "./DeleteStudentButton";
import SearchBar from "./Searchbar";
import { color } from "framer-motion";



const StudentList = () => {
  const { data: students = [], isLoading, isError } = useGetStudentsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <div className="text-gray-600 text-lg">Loading students...</div>;
  if (isError) return <div className="text-red-500 text-lg">Error fetching students.</div>;

  const filteredStudents = students.filter((student) =>
    (typeof student.name === "string" &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (typeof student.class === "string" &&
      student.class.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link
          to="/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          + Add Student
        </Link>
      </div>

      {/* Students Table */}
      {filteredStudents.length === 0 ? (
        <div className="text-gray-500 text-center mt-4">No students found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-red-200 text-black">
            <thead className="bg-black-100 text-white">
              <tr>
                <th className="p-3 border-b ">Name</th>
                <th className="p-3 border-b">Roll No</th>
                <th className="p-3 border-b">Class</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{student.name}</td>
                  <td className="p-3 border-b">{student.roll}</td>
                  <td className="p-3 border-b">{student.class}</td>
                  <td className="p-3 border-b">
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/student/${student.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </Link>
                      <Link
                        to={`/student/${student.id}/edit`}
                        className="text-green-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteStudentButton id={student.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
